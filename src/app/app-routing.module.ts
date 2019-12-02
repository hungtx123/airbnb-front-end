import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {CreateHomeComponent} from './create-home/create-home.component';
import {HostComponent} from './host/host.component';
import {ListHomeComponent} from './host/list-home/list-home.component';
import {InforHomeHostComponent} from './host/infor-home-host/infor-home-host.component';
import {UserComponent} from './user/user.component';
import {ListHomeUserComponent} from './user/list-home-user/list-home-user.component';
import {DetailHomeUserComponent} from './user/detail-home-user/detail-home-user.component';
import {OrderHomeUserComponent} from './user/detail-home-user/order-home-user/order-home-user.component';
import {BookListOneHomeComponent} from './host/infor-home-host/book-list-one-home/book-list-one-home.component';
import {TrangchuComponent} from './trangchu/trangchu.component';


const routes: Routes = [
  {
    path: 'trangchu',
    component: TrangchuComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'list-home',
    component: ListHomeComponent
  },
  {path: 'register',
    component: RegisterComponent
  },
  {
    path: 'addprofile',
    component: ProfileComponent
  },
  {
    path: 'editPassword',
    component: ChangePasswordComponent
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: 'list-home',
        component: ListHomeUserComponent
      },
      {
        path: ':id',
        component: DetailHomeUserComponent,
      },
      {
        path: ':id/order',
        component: OrderHomeUserComponent
      }
    ]
  },
  {
    path: 'host',
    component: HostComponent,
    children: [
      {
      path: 'create-home',
      component: CreateHomeComponent
    },
      {
      path: 'list-home',
        component: ListHomeComponent
      },
      {
        path: ':id',
        component: InforHomeHostComponent,
      },
      {
        path: ':id/booklist',
        component: BookListOneHomeComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
