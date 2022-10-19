import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneHeaderComponent } from './plane-header.component';

describe('PlaneHeaderComponent', () => {
  let component: PlaneHeaderComponent;
  let fixture: ComponentFixture<PlaneHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaneHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaneHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
