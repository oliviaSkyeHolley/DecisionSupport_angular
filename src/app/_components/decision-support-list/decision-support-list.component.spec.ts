import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionSupportListComponent } from './decision-support-list.component';

describe('DecisionSupportListComponent', () => {
  let component: DecisionSupportListComponent;
  let fixture: ComponentFixture<DecisionSupportListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecisionSupportListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecisionSupportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
