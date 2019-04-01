import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user-class/user';

interface ApiResponse{
	name;
  }

 @Injectable()
 export class UserRequestService {
 	userName:string="Emma Kibore";	

 	constructor(private _http: HttpClient) { 
 		//this.usersApiURL  = 'https://api.github.com/users/';		
 	}

 	getUserDetails() {		
 		return this._http.get<ApiResponse>( environment.apiurl+ this.userName +environment.accesstoken);
	 }
	 getUser(){
		return this._http.get<ApiResponse>(environment.apiurl+this.userName+environment.accesstoken)
	   }
	  
	   getRepo(){
		 return this._http.get<ApiResponse>(environment.apiurl+environment)
	   }
	  }
	 
 
