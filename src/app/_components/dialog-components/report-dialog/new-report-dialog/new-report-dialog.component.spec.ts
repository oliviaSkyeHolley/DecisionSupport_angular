import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReportDialogComponent } from './new-report-dialog.component';

describe('NewReportDialogComponent', () => {
  let component: NewReportDialogComponent;
  let fixture: ComponentFixture<NewReportDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewReportDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewReportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
