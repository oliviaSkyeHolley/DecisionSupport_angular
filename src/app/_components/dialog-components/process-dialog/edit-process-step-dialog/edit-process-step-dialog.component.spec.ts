import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProcessStepDialogComponent } from './edit-process-step-dialog.component';

describe('EditProcessStepDialogComponent', () => {
  let component: EditProcessStepDialogComponent;
  let fixture: ComponentFixture<EditProcessStepDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditProcessStepDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProcessStepDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
