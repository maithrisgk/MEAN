import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayChartComponent } from './display-chart.component';

describe('DisplayChartComponent', () => {
  let component: DisplayChartComponent;
  let fixture: ComponentFixture<DisplayChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
