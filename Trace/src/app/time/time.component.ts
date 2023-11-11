import { Component, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms'; // Import NgModel


@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent {
  myTime: string = '00:00:00:000';

  formattedTime: string = 'hh:mm:ss:ms';

  updateTime(newValue: string) {
    // Add validation or parsing logic here
    this.myTime = newValue;
  }

  changeTime() {
    const randomHour = Math.floor(Math.random() * 24);
    const randomMinute = Math.floor(Math.random() * 60);
    const randomSecond = Math.floor(Math.random() * 60);
    const randomMillisecond = Math.floor(Math.random() * 1000);

    this.myTime = `${randomHour.toString().padStart(2, '0')}:${randomMinute.toString().padStart(2, '0')}:${randomSecond.toString().padStart(2, '0')}.${randomMillisecond.toString().padStart(3, '0')}`;


  }


}
