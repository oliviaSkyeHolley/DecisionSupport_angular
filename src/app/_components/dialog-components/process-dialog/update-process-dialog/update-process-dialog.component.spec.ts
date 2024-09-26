import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProcessDialogComponent } from './update-process-dialog.component';

describe('UpdateProcessDialogComponent', () => {
  let component: UpdateProcessDialogComponent;
  let fixture: ComponentFixture<UpdateProcessDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateProcessDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProcessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
