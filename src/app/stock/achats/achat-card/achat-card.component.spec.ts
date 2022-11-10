import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatCardComponent } from './achat-card.component';

describe('AchatCardComponent', () => {
  let component: AchatCardComponent;
  let fixture: ComponentFixture<AchatCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchatCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
