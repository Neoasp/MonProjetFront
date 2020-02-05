import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component'
import { AdherentComponent } from './adherent/adherent.component';
import { ActivityComponent } from './activity/activity.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },{
    path: 'home',
    component: HomeComponent,
  }, {
    path: 'adherent',
    component: AdherentComponent,
  }, {
    path: 'activity',
    component: ActivityComponent,  
  }, {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
