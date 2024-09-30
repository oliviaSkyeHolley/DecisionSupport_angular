import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildProcessStepsComponent } from './build-process-steps.component';

describe('BuildProcessStepsComponent', () => {
  let component: BuildProcessStepsComponent;
  let fixture: ComponentFixture<BuildProcessStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildProcessStepsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildProcessStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
