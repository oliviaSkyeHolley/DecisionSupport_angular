import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInvestigationDialogComponent } from './new-investigation-dialog.component';

describe('NewInvestigationDialogComponent', () => {
  let component: NewInvestigationDialogComponent;
  let fixture: ComponentFixture<NewInvestigationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewInvestigationDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewInvestigationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
