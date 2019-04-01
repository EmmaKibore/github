import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user-class/user';
// import { User } from './user-http';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserRequestService {

//   user: User;

//   constructor(private http:HttpClient) { 
//     this.user = new User("","","","","","","")
//   }

//   searchedUser: string = "";

//   userRequest(){
    
//     interface ApiResponse{mport { User } from './user';
//       login: string;
//       name: string;
//       bio: any;
//       public_repos: number;
//       followers: number;
//       following: number;
//       avatar_url: any;
//     }
//     let promise = new Promise((resolve,reject)=>{
//       this.http.get<ApiResponse>(environment.apiUrl + this.searchedUser + "?access_token=" + environment.access_token).toPromise().then(response=>{

//         this.user.bender = response.avatar_url
//         this.user.username = response.login
//         this.user.name = response.name
//         this.user.bio = response.bio
//         this.user.repositories = response.public_repos
//         this.user.followers = response.followers
//         this.user.following = response.following

//         resolve();

//       },
//       error=>{

//         this.user.bender = ""
//         this.user.username = "EmmaKibore"
//         this.user.name = "Emma Kibore"
//         this.user.bio = "Coding is mbaemby!"
//         this.user.repositories = 30
//         this.user.followers = 2
//         this.user.following = 0

//         reject(error);
        
//       })
//     })

//     return promise
// }
// }
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
 		return this._http.get<ApiResponse>( environment.apiurl+environment.users + this.userName +environment.accesstoken);
	 }
	//  getRepositoryList() {
	// 	 return this._http.get<ApiResponse>( environment.apiurl+environment.users + this.userName + environment._);
	 }

 	// getRepositoryList(userName) {
 	// 	return this._http.get( this.usersApiURL + userName + '/repos');
 	// }

 	// getFollowersList(userName){
 	// 	return this._http.get( this.usersApiURL + userName + '/followers');
 	// }
 