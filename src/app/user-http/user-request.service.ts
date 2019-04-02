import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user-class/user';
import { Observable } from 'rxjs';
import { AotCompiler } from '@angular/compiler';
import { map } from "rxjs/operators"
import { Repository } from "../repository-class/repository";
interface ApiResponse{
	name;
	// userName;
  }

 @Injectable()
 export class UserRequestService {
 

 	constructor(private http:HttpClient) { 
 		//this.usersApiURL  = 'https://api.github.com/users/';		
 	}

 	// getUserDetails() {	

 	// 	return this.http.get<ApiResponse>( environment.apiurl+ this.userName +environment.accesstoken);
	//  }
	 getUser(userName:string):Observable<User>{
		 
		return this.http.get<User>(environment.apiurl+userName)
	   }
	  
	   getRepo(userName:string):Observable<Repository>{
		 return this.http.get<Repository>(environment.apiurl+userName+"/repos")
	   }
	  }
	 
 
