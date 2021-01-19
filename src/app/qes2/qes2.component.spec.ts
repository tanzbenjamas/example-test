import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qes2Component } from './qes2.component';

describe('Qes2Component', () => {
  let component: Qes2Component;
  let fixture: ComponentFixture<Qes2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Qes2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Qes2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
