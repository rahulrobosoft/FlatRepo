import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOptions2Component } from './dialog-options2.component';

describe('DialogOptions2Component', () => {
  let component: DialogOptions2Component;
  let fixture: ComponentFixture<DialogOptions2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogOptions2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogOptions2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
