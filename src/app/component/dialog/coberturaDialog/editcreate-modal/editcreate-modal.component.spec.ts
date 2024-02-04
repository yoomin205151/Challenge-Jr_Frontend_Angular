import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcreateModalComponent } from './editcreate-modal.component';

describe('EditcreateModalComponent', () => {
  let component: EditcreateModalComponent;
  let fixture: ComponentFixture<EditcreateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcreateModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
