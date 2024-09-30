import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProcessStepDialogComponent } from './delete-process-step-dialog.component';

describe('DeleteProcessStepDialogComponent', () => {
  let component: DeleteProcessStepDialogComponent;
  let fixture: ComponentFixture<DeleteProcessStepDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteProcessStepDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteProcessStepDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
