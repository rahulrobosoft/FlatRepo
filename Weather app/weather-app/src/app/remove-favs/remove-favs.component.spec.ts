import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFavsComponent } from './remove-favs.component';

describe('RemoveFavsComponent', () => {
  let component: RemoveFavsComponent;
  let fixture: ComponentFixture<RemoveFavsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveFavsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveFavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
