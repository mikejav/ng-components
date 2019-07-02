import { Directive, ElementRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appCardRadio]',
})
export class CardRadioDirective {

  public isSelected = false;
  @Input() value: string;

  constructor(
    public templateRef: TemplateRef<any>,
  ) { }
}
