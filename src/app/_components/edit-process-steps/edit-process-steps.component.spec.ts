import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProcessStepsComponent } from './edit-process-steps.component';

describe('EditProcessStepsComponent', () => {
  let component: EditProcessStepsComponent;
  let fixture: ComponentFixture<EditProcessStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditProcessStepsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProcessStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
