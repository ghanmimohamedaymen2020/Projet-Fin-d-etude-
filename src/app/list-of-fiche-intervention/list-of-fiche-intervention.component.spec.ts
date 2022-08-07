import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfFicheInterventionComponent } from './list-of-fiche-intervention.component';

describe('ListOfFicheInterventionComponent', () => {
  let component: ListOfFicheInterventionComponent;
  let fixture: ComponentFixture<ListOfFicheInterventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfFicheInterventionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfFicheInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
