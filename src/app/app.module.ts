import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { User } from './user-class/user';
import { UserRequestService} from "./user-http/user-request.service"

import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RepositoriesComponent } from './repositories/repositories.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    RepositoriesComponent,
    GithubComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
