import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizacoberturaDeleteModalComponent } from './polizacobertura-delete-modal.component';

describe('PolizacoberturaDeleteModalComponent', () => {
  let component: PolizacoberturaDeleteModalComponent;
  let fixture: ComponentFixture<PolizacoberturaDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolizacoberturaDeleteModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolizacoberturaDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
