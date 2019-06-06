import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from 'auth.guard';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UpdateComponent } from './update/update.component';
import { ProfileComponent } from './profile/profile.component';
import { InformacioneTehnologijeComponent } from './informacione-tehnologije/informacione-tehnologije.component';
import { InsertFormaComponent } from './insert-forma/insert-forma.component';
import { InformacioneUpdateComponent } from './informacione-update/informacione-update.component';
import {ContactformComponent} from './contactform/contactform.component';
import { AdminGuard } from './admin.guard';

export const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'signup', component: SignupComponent},
{path: 'login', component: LoginComponent},
{path: 'contact', component: ContactformComponent},
{path: 'admindashboard', component: AdmindashboardComponent, canActivate: [AuthGuard, AdminGuard] },
{path: 'userdashboard', component: UserdashboardComponent, canActivate: [AuthGuard]},
{path: 'update/:id', component: UpdateComponent, canActivate: [AuthGuard]},
{path: 'profile', component: ProfileComponent},
{path: 'informacione-tehnologije', component: InformacioneTehnologijeComponent, canActivate: [AuthGuard] },
{path: 'insert-forma', component: InsertFormaComponent},
{path: 'informacione-update/:id', component: InformacioneUpdateComponent},

{path: '**', pathMatch: 'full', redirectTo: 'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
