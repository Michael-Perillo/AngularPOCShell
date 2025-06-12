import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { REMOTE_ENTRY_MM } from './shared/constants/prod/constants';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'remote',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module', // Use 'module' for native module federation
        remoteEntry: REMOTE_ENTRY_MM,
        exposedModule: './ViewsModule',
      }).then(m => m.ViewsModule),
  },
  // { path: '**', redirectTo: '' }, // Redirect any unknown paths to home
];
