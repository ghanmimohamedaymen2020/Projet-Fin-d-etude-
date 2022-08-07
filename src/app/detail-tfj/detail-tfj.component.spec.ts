import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTFJComponent } from './detail-tfj.component';

describe('DetailTFJComponent', () => {
  let component: DetailTFJComponent;
  let fixture: ComponentFixture<DetailTFJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailTFJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTFJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
