import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SquareComponent } from './square/square.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SquareComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'valentine';
}
