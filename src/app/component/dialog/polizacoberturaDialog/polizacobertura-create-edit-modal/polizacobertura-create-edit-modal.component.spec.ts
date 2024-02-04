import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizacoberturaCreateEditModalComponent } from './polizacobertura-create-edit-modal.component';

describe('PolizacoberturaCreateEditModalComponent', () => {
  let component: PolizacoberturaCreateEditModalComponent;
  let fixture: ComponentFixture<PolizacoberturaCreateEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolizacoberturaCreateEditModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolizacoberturaCreateEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
