import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qes1Component } from './qes1.component';

describe('Qes1Component', () => {
  let component: Qes1Component;
  let fixture: ComponentFixture<Qes1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Qes1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Qes1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
