import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorClient } from '../proto/CalcServiceClientPb';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'bug-demo';

  constructor() {
    let client = new CalculatorClient('')
  }
}
