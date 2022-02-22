import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';

import { AllUsersComponent } from './pages/all-users/all-users.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UsersRoutingModule } from './users-routing.module';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    TableComponent,
    CardComponent,
    AllUsersComponent,
    UserDetailsComponent,
    HomeComponent,
  ],
  imports: [CommonModule, UsersRoutingModule, MaterialModule, HttpClientModule],
})
export class UsersModule { }
