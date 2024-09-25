import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProcessStepDialogComponent } from './add-process-step-dialog.component';

describe('AddProcessStepDialogComponent', () => {
  let component: AddProcessStepDialogComponent;
  let fixture: ComponentFixture<AddProcessStepDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProcessStepDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProcessStepDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
