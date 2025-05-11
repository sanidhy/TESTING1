import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test1ComponentComponent } from './test1-component.component';

describe('Test1ComponentComponent', () => {
  let component: Test1ComponentComponent;
  let fixture: ComponentFixture<Test1ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test1ComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Test1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
