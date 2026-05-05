import { Component, signal } from '@angular/core';
import { CardList } from './components/card-list/card-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('intro-angular');
}