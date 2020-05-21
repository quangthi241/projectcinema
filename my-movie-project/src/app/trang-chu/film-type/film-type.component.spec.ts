import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmTypeComponent } from './film-type.component';

describe('FilmTypeComponent', () => {
  let component: FilmTypeComponent;
  let fixture: ComponentFixture<FilmTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
