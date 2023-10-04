import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'WebApplication';
  mainText!: string;
  secondText!: string;
  quarantaquattro: number = 44;
  uno: number = 1;
  temporary: any[] = [
    10,
    parseInt('23'),
    this.quarantaquattro,
    57,
    this.uno,
    parseInt('2'),
  ];
  counter: number[] = this.temporary.map((a) => {
    if (typeof a === typeof String) {
      return parseInt(a);
    } else return a;
  });
}
