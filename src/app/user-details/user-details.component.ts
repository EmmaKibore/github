import { Component, OnInit } from '@angular/core';
import { ReposRequestService } from '../repos-http/repos-request.service';
import { Route } from '@angular/router';
// import { UserInfoService } from '../user-info.service';
import { UserRequestService } from '../user-http/user-request.service';
import { User } from '../user-class/user';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  providers: [ReposRequestService, UserRequestService],
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userRequestService: UserRequestService;
  repoRequestService: ReposRequestService;

  user;

  //seachedUser: string="";

  constructor(public userRequestedService: UserRequestService,) { }

  ngOnInit() {

    // this.userRequestService.userRequest();
    // this.user = this.userRequestService.user;

  }
  displayname(){
    return this.userRequestedService.getUserDetails().subscribe(data=>{
      this.user=data.name
    })
  }

}
