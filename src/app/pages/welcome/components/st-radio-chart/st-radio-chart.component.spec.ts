import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StRadioChartComponent } from './st-radio-chart.component';

describe('StRadioChartComponent', () => {
  let component: StRadioChartComponent;
  let fixture: ComponentFixture<StRadioChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StRadioChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StRadioChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
