import { Component, OnInit } from '@angular/core';
// import { ReposRequestService } from '../repos-http/repos-request.service';
import { Route } from '@angular/router';
// import { UserInfoService } from '../user-info.service';
import { UserRequestService } from '../user-http/user-request.service';
import { User } from '../user-class/user';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Repository } from '../repository-class/repository';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  providers: [ UserRequestService],
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userRequestService: UserRequestService;

  user:any=[];
  repos:any=[]

  userName: string="emmakibore";

  constructor(private http:HttpClient,private userRequestedService: UserRequestService,) { }

  ngOnInit() {

  }
  getUser(){
    return this.userRequestedService.getUser(this.userName).subscribe(data=>{
      this.user=data
      console.log(data)
    })
  }
  getRepo(){
    return this.userRequestedService.getRepo(this.userName).subscribe((res)=>{
      this.repos=res;
      console.log(res)
    })
  }

}
