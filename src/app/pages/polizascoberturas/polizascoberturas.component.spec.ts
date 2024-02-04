import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizascoberturasComponent } from './polizascoberturas.component';

describe('PolizascoberturasComponent', () => {
  let component: PolizascoberturasComponent;
  let fixture: ComponentFixture<PolizascoberturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolizascoberturasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolizascoberturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
