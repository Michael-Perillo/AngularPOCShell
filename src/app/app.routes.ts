import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'remote',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module', // Use 'module' for native module federation
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './ViewsModule',
      }).then(m => m.ViewsModule),
  },
  // { path: '**', redirectTo: '' }, // Redirect any unknown paths to home
];
