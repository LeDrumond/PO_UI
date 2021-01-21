import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigComponent } from './config/config.component';

  const routes: Routes = [ 
  { 
    path: 'config', component: ConfigComponent }
    /*path: 'config', 
    loadChildren: () => import('./config/config.module').then(m => m.ConfigModule) 
  
  },

  { 
    
    path: '', 
    redirectTo: '',
    pathMatch: 'full'
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
