import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateProcessDialogComponent } from './duplicate-process-dialog.component';

describe('DuplicateProcessDialogComponent', () => {
  let component: DuplicateProcessDialogComponent;
  let fixture: ComponentFixture<DuplicateProcessDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuplicateProcessDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuplicateProcessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
