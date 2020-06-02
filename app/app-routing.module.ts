import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {FighterComponent} from './component/fighter/fighter.component';
import {AddFighterComponent} from './component/add-fighter/add-fighter.component';
import {DetailsComponent} from './component/details/details.component';
import { LoginComponent} from './component/login/login.component';
import { AuthguardService} from './services/authguard.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'fighter', component: FighterComponent, canActivate: [AuthguardService]},
  {path: 'addFighter', component: AddFighterComponent, canActivate: [AuthguardService]},
  {path: 'details/:name', component: DetailsComponent, canActivate: [AuthguardService]},
  {path: 'login', component: LoginComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [AuthguardService]
})
export class AppRoutingModule {}
