import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenameInvestigationDialogComponent } from './rename-investigation-dialog.component';

describe('RenameInvestigationDialogComponent', () => {
  let component: RenameInvestigationDialogComponent;
  let fixture: ComponentFixture<RenameInvestigationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenameInvestigationDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenameInvestigationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
