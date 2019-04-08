import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss']
})
export class EmailInputComponent implements OnInit {

  isFocused = false;
  emails = [];

  @Input() initialEmails: string[];
  @Output() emailsChange = new EventEmitter<string[]>();

  @ViewChild('containerBox') containerBox: ElementRef;
  @ViewChild('mainInput') mainInput: ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit() {
    this.setupInitialValues();
    this.setupEventListeners();
  }

  private setupInitialValues() {
    if (this.initialEmails) {
      this.emails = this.initialEmails;
    }
  }

  private setupEventListeners() {
    fromEvent(this.mainInput.nativeElement, 'focus').subscribe(() => {
      this.isFocused = true;
    });
    fromEvent(this.mainInput.nativeElement, 'blur').subscribe(() => {
      this.isFocused = false;
    });
    fromEvent<KeyboardEvent>(this.mainInput.nativeElement, 'keyup')
      .pipe(
        filter(e => e.keyCode === 188),
        filter(() => this.isEmailValid())
      )
      .subscribe(() => {
        this.addEmail();
      });
  }

  addEmail() {
    const email = this.mainInput.nativeElement.value.slice(0, -1);
    this.emails.push(email);
    this.clearMainInput();
    this.emitEmailsChange();
  }

  clearMainInput() {
    this.mainInput.nativeElement.value = '';
  }

  private isEmailValid(): boolean {
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const email = this.mainInput.nativeElement.value.slice(0, -1);
    return emailPattern.test(email);
  }

  rmEmail(index: number) {
    this.emails.splice(index, 1);
    this.emitEmailsChange();
  }

  private emitEmailsChange() {
    this.emailsChange.emit(this.emails);
  }
}
