import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { NavigationComponent } from './navigation/navigation.component';
import { provideRouter, RouterOutlet } from '@angular/router';
import { provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, RouterOutlet, NavigationComponent],
      providers: [
        provideBrowserGlobalErrorListeners(),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

describe('App Routes', () => {
  it('should have a home route', () => {
    const homeRoute = routes.find(r => r.path === '');
    expect(homeRoute).toBeTruthy();
    expect(homeRoute?.component).toBeDefined();
  });
});
