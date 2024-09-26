import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProcessStepDialogComponent } from './view-process-step-dialog.component';

describe('ViewProcessStepDialogComponent', () => {
  let component: ViewProcessStepDialogComponent;
  let fixture: ComponentFixture<ViewProcessStepDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewProcessStepDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProcessStepDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
