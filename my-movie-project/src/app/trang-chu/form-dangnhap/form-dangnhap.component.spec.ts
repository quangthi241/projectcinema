import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDangnhapComponent } from './form-dangnhap.component';

describe('FormDangnhapComponent', () => {
  let component: FormDangnhapComponent;
  let fixture: ComponentFixture<FormDangnhapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDangnhapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDangnhapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
