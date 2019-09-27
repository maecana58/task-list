import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrgentPage } from './urgent.page';

describe('UrgentPage', () => {
  let component: UrgentPage;
  let fixture: ComponentFixture<UrgentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrgentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrgentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
