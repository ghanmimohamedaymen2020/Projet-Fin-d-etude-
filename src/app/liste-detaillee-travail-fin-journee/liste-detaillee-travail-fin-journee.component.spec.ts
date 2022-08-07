import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDetailleeTravailFinJourneeComponent } from './liste-detaillee-travail-fin-journee.component';

describe('ListeDetailleeTravailFinJourneeComponent', () => {
  let component: ListeDetailleeTravailFinJourneeComponent;
  let fixture: ComponentFixture<ListeDetailleeTravailFinJourneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDetailleeTravailFinJourneeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDetailleeTravailFinJourneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
