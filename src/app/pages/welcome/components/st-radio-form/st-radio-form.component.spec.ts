import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StRadioFormComponent } from './st-radio-form.component';

describe('StRadioFormComponent', () => {
  let component: StRadioFormComponent;
  let fixture: ComponentFixture<StRadioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StRadioFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StRadioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
