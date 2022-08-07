import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveFichInterventionToPDFComponent } from './save-fich-intervention-to-pdf.component';

describe('SaveFichInterventionToPDFComponent', () => {
  let component: SaveFichInterventionToPDFComponent;
  let fixture: ComponentFixture<SaveFichInterventionToPDFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveFichInterventionToPDFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveFichInterventionToPDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
