import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRadioGroupComponent } from './card-radio-group/card-radio-group.component';
import { CardRadioDirective } from './card-radio/card-radio.directive';

@NgModule({
  declarations: [
    CardRadioGroupComponent,
    CardRadioDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardRadioGroupComponent,
    CardRadioDirective,
  ]
})
export class CardRadioModule { }
