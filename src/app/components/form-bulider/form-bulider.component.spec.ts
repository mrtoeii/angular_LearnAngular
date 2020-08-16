import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuliderComponent } from './form-bulider.component';

describe('FormBuliderComponent', () => {
  let component: FormBuliderComponent;
  let fixture: ComponentFixture<FormBuliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBuliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
