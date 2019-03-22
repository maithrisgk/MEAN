import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartExpandComponent } from './chart-expand.component';

describe('ChartExpandComponent', () => {
  let component: ChartExpandComponent;
  let fixture: ComponentFixture<ChartExpandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartExpandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
