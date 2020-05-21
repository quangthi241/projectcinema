import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSeatListComponent } from './edit-seat-list.component';

describe('EditSeatListComponent', () => {
  let component: EditSeatListComponent;
  let fixture: ComponentFixture<EditSeatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSeatListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSeatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
