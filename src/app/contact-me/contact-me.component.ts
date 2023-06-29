import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {

  constructor(private toastr: ToastrService) { }

  // TODAYS DATE WILL BE GENENERED AND DISPLAYED
  private daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  private date = new Date();
  dateVal = Date.now();
  selected!: Date | null;

  get errorMessageForEmail(): string {
    const form: UntypedFormControl = (this.contactFormControl.get('email') as UntypedFormControl);
    return form.hasError('required') ?
      'Email is required' :
      form.hasError('email') ?
        'Enter a valid email' : ''
  }

  get errorMessageForName(): string {
    const form: UntypedFormControl = (this.contactFormControl.get('email') as UntypedFormControl);
    return form.hasError('required') ?
      'Name is required' : ''
  }

  get errorMessageForMessage(): string {
    const form: UntypedFormControl = (this.contactFormControl.get('email') as UntypedFormControl);
    return form.hasError('required') ?
      'Messsage is required' : ''
  }


  // CLOCK
  public hour: any;
  public minute!: string;
  public second!: string;
  public ampm!: string;
  public day!: string;

  //  SETS A REAL TIME DIGITAL CLOCK
  private updateDate(date: Date) {
    const hours = date.getHours();
    this.ampm = hours >= 12 ? 'PM' : 'AM';
    this.hour = hours % 12;
    this.hour = this.hour ? this.hour : 12;
    this.hour = this.hour < 10 ? '0' + this.hour : this.hour;

    const minutes = date.getMinutes();
    this.minute = minutes < 10 ? '0' + minutes : minutes.toString();
    const seconds = date.getSeconds();
    this.second = seconds < 10 ? '0' + seconds : seconds.toString();

  }
  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe: any;
  contactFormControl!: UntypedFormGroup;



  sendMessage() {
    // this.contactUsService.addContact(this.contactUs).subscribe(data => {
    this.contactFormControl.reset();
    this.messageSentSuccessfully();
    // })
  }

  messageSentSuccessfully() {
    this.toastr.success('Your message has been sent successfully. I will respond within 24 hrs');
  }

  ngOnInit(): void {
    this.todayWithPipe = this.pipe.transform(Date.now(), 'EEEE, MMMM d, y');
    setInterval(() => {
      const date = new Date();
      this.updateDate(date);
    }, 1000);
    this.day = this.daysArray[this.date.getDay()];

    this.contactFormControl = new UntypedFormGroup({
      'name': new UntypedFormControl(null, Validators.required),
      'email': new UntypedFormControl(null, Validators.required),
      //'subject': new UntypedFormControl(null, Validators.required),
      'message': new UntypedFormControl(null, Validators.required),
      'recaptcha': new UntypedFormControl(null, Validators.required),
    })
  }

}
