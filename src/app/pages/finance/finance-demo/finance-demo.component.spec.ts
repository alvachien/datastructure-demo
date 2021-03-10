import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceDemoComponent } from './finance-demo.component';

describe('FinanceDemoComponent', () => {
  let component: FinanceDemoComponent;
  let fixture: ComponentFixture<FinanceDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
