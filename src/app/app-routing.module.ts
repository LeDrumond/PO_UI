import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [ 
  { 
    
    path: 'config', 
    loadChildren: () => import('./config/config.module').then(m => m.ConfigModule) 
  
  },

  { 
    
    path: '', 
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
