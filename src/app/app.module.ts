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
import { ListOrderUserComponent } from './user/list-order-user/list-order-user.component';
import {HomestayComponent} from './homestay/homestay.component';
import {IncomeMonthComponent} from './host/infor-home-host/income-month/income-month.component';
import { SearchHomeGuestComponent } from './search-home-guest/search-home-guest.component';
import {MapComponent} from './map/map.component';
import {AgmCoreModule} from '@agm/core';
import { MapUserComponent } from './map-user/map-user.component';
import { CommentComponent } from './user/detail-home-user/comment/comment.component';
import { ListCommentComponent } from './user/detail-home-user/list-comment/list-comment.component';
import { EditHomeComponent } from './host/edit-home/edit-home.component';
import { DeleteHomeComponent } from './host/delete-home/delete-home.component';

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
        ListOrderUserComponent,
        HomestayComponent,
        IncomeMonthComponent,
        SearchHomeGuestComponent,
      MapComponent,
      MapUserComponent,
        CommentComponent,
        ListCommentComponent,
        EditHomeComponent,
        DeleteHomeComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AgmCoreModule.forRoot( {
      apiKey: 'AIzaSyBkkPHziuQCtilx0bQUEwjwJu2Xa3g--g0'
    })
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
