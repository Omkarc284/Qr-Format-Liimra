// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Qr';

  public Name: string = null;
  public level: 'L' | 'M' | 'Q' | 'H' ;
  public width: number;
  public Address: string = null;
  public Msg = 'Use your Mobile to Scan!';

  constructor() {
    this.level = 'H';
    this.width = 175;
  }

  changeLevel(newValue: 'L' | 'M' | 'Q' | 'H'): void {
    this.level = newValue;
  }

  changeName(newValue: string): void {
    this.Name = newValue;
  }

  changeAddress(newValue: string): void {
    this.Address = newValue;
  }

  changeMsg(newValue: string): void {
    this.Msg = newValue;
  }
// tslint:disable-next-line:eofline
}