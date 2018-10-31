import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework2Component } from './homework2.component';

describe('Homework2Component', () => {
  let component: Homework2Component;
  let fixture: ComponentFixture<Homework2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homework2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homework2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
