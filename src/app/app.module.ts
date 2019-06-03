import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import {LoginAuthService} from './login-auth.service'

import {FormsModule} from '@angular/forms';
import {UserService} from './user.service';
import {HttpClientModule} from '@angular/common/http';
import { AuthGuard } from 'auth.guard';
import { UpdateComponent } from './update/update.component';
import { ProfileComponent } from './profile/profile.component';
import { InformacioneTehnologijeComponent } from './informacione-tehnologije/informacione-tehnologije.component';
import { InsertFormaComponent } from './insert-forma/insert-forma.component';
import { InformacioneUpdateComponent } from './informacione-update/informacione-update.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    AdmindashboardComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    UserdashboardComponent,
    UpdateComponent,
    ProfileComponent,
    InformacioneTehnologijeComponent,
    InsertFormaComponent,
    InformacioneUpdateComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbModule

 
  ],
  providers: [
    UserService,
    AuthGuard,
    LoginAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
