import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFicheInterventionComponent } from './add-fiche-intervention.component';

describe('AddFicheInterventionComponent', () => {
  let component: AddFicheInterventionComponent;
  let fixture: ComponentFixture<AddFicheInterventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFicheInterventionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFicheInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
