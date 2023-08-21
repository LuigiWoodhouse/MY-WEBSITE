import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  private daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  private date = new Date();
  dateVal = Date.now();
  selected!: Date | null;

  @ViewChild('sidenavRef') sidenavRef!: MatSidenav;

  // CLOCK
  public hour: any;
  public minute!: string;
  public second!: string;
  public ampm!: string;
  public day!: string;

  closeSidenav(sidenav: MatSidenav): void {
    sidenav.close();
  }

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



  ngOnInit(): void {
      this.todayWithPipe = this.pipe.transform(Date.now(), 'EEEE, MMMM d, y');
      setInterval(() => {
          const date = new Date();
          this.updateDate(date);
      }, 1000);
      this.day = this.daysArray[this.date.getDay()];
  }

}
