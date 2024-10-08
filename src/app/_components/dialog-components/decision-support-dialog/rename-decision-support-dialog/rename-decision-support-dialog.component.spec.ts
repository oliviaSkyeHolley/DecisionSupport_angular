import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenameDecisionSupportDialogComponent } from './rename-decision-support-dialog.component';

describe('RenameDecisionSupportDialogComponent', () => {
  let component: RenameDecisionSupportDialogComponent;
  let fixture: ComponentFixture<RenameDecisionSupportDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenameDecisionSupportDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenameDecisionSupportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
