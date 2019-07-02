import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRadioGroupComponent } from './card-radio-group.component';

describe('CardRadioGroupComponent', () => {
  let component: CardRadioGroupComponent;
  let fixture: ComponentFixture<CardRadioGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRadioGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
