import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import {httpInterceptorProviders} from './auth/auth-interceptor';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CreateHomeComponent } from './create-home/create-home.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { HostComponent } from './host/host.component';
import { ListHomeComponent } from './host/list-home/list-home.component';
import { UserComponent } from './user/user.component';
import { InforHomeHostComponent } from './host/infor-home-host/infor-home-host.component';
import { ListHomeUserComponent } from './user/list-home-user/list-home-user.component';
import { DetailHomeUserComponent } from './user/detail-home-user/detail-home-user.component';
import { OrderHomeUserComponent } from './user/detail-home-user/order-home-user/order-home-user.component';
import {DesktopComponent} from './desktop/desktop.component';
import { BookListOneHomeComponent } from './host/infor-home-host/book-list-one-home/book-list-one-home.component';
import { TrangchuComponent } from './trangchu/trangchu.component';

@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        LoginComponent,
        ProfileComponent,
        ChangePasswordComponent,
        CreateHomeComponent,
        HostComponent,
        ListHomeComponent,
        UserComponent,
        InforHomeHostComponent,
        ListHomeUserComponent,
        DetailHomeUserComponent,
        OrderHomeUserComponent,
        DesktopComponent,
        BookListOneHomeComponent,
        TrangchuComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
