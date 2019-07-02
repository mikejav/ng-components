import { Component, OnInit, ContentChildren, QueryList, AfterContentInit, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { CardRadioDirective } from 'src/app/components/card-radio/card-radio/card-radio.directive';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-card-radio-group',
  templateUrl: './card-radio-group.component.html',
  styleUrls: ['./card-radio-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CardRadioGroupComponent), multi: true }
  ]
})
export class CardRadioGroupComponent implements OnInit, AfterContentInit, ControlValueAccessor {

  @ContentChildren(CardRadioDirective, { descendants: false }) cardRadios: QueryList<CardRadioDirective>;

  value: any;
  propagateChange: any = () => { };

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.reloadSelection();
  }

  reloadSelection() {
    this.cardRadios.forEach(cardRadio => {
      if (cardRadio.value === this.value) {
        cardRadio.isSelected = true;
      } else {
        cardRadio.isSelected = false;
      }
    });
  }

  log(sth) {
    console.log(sth);
  }

  /*
   * ControlValueAccessor specific methods:
   */

  writeValue(value: any): void {
    this.log('pisze value');
    if (value) {
      this.value = value;
    }
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    console.log('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    console.log('Method not implemented.');
  }

  // others methods:

  selectValue(value: any) {
    if (value === this.value) {
      return;
    }
    this.log('dupa');
    this.value = value;
    this.propagateChange(this.value);
    this.reloadSelection();
  }

}
