import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceRowAddComponent } from './invoice-row-add.component';

describe('InvoiceRowAddComponent', () => {
  let component: InvoiceRowAddComponent;
  let fixture: ComponentFixture<InvoiceRowAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceRowAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceRowAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
