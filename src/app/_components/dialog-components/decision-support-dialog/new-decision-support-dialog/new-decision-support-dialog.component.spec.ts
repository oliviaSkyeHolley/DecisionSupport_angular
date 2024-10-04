import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDecisionSupportDialogComponent } from './new-decision-support-dialog.component';

describe('NewDecisionSupportDialogComponent', () => {
  let component: NewDecisionSupportDialogComponent;
  let fixture: ComponentFixture<NewDecisionSupportDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewDecisionSupportDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDecisionSupportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
