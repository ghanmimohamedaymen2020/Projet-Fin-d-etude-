import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTFJComponent } from './liste-tfj.component';

describe('ListeTFJComponent', () => {
  let component: ListeTFJComponent;
  let fixture: ComponentFixture<ListeTFJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeTFJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeTFJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
