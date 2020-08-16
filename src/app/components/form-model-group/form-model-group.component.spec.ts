import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModelGroupComponent } from './form-model-group.component';

describe('FormModelGroupComponent', () => {
  let component: FormModelGroupComponent;
  let fixture: ComponentFixture<FormModelGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormModelGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModelGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
