import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { finalize, Observable, of, tap } from 'rxjs';
import { HttpCacheService } from './service/http-cache.service';
import { TimerService } from './service/timer.service';
import { LoaderService } from './service/loader.service';
@Injectable()
export class CacheInterceptor implements HttpInterceptor {

 

  constructor(
    private cacheService: HttpCacheService,
    private timerService: TimerService,
    public loader : LoaderService,
    ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.loader.isLoading.next(true);
    this.timerService.startTimer();
    let remainingTimeInMilliseconds = this.timerService.getRemainingTime();
    
    if (remainingTimeInMilliseconds <= 0) {
      
      this.timerService.resetTimer();
      console.log(
        `Invalidating cache due to cache time limit: ${request.method} ${request.url}`
      );
      this.cacheService.invalidateCache();
    } 

    //check if the outgoing calls are GET and MRDH APIs
    if (request.method === 'GET' ) { 
      // attempt to retrieve a cached response
      const cachedResponse:
        | HttpResponse<any>
        | undefined = this.cacheService.get(request.url);

      // return cached response
      if (cachedResponse) {
        console.log(`Returning a cached response: ${cachedResponse.url}`);
        this.loader.isLoading.next(false);
        console.log(cachedResponse);
        return of(cachedResponse);
        
      }

      // send request to server and add response to cache
      return next.handle(request).pipe(
        tap((event) => {
          if (event instanceof HttpResponse) {
            console.log(`Adding item to cache: ${request.url}`);
            this.cacheService.put(request.url, event);
          }
        }),finalize(
          () => {
            this.loader.isLoading.next(false);
          }
        )
      );
    }
    else {
        // pass along non-cacheable requests 
        return next.handle(request).pipe(
          finalize(
            () => {
              this.loader.isLoading.next(false);
            }
          )
        );
    }


  }
}