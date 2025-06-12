import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { REMOTE_ENTRY_MM } from './shared/constants/prod/constants';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class App {
  protected title = 'app';
  constructor(private meta: Meta) {
    const remoteEntry = REMOTE_ENTRY_MM.replace(/\/?remoteEntry\.js$/, '');
    this.meta.updateTag({
      'http-equiv': 'Content-Security-Policy',
      content: `script-src 'self' 'unsafe-eval' ${remoteEntry}; object-src 'self'`,
    });
  }
}
