import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user-class/user'
import { Repository } from '../repository-class/repository';

// @Injectable({
//   providedIn: 'root'
// })
// export class ReposRequestService {

//   repository: Repository;

//   constructor(private http:HttpClient) { 
//     this.repository = new Repository("")
//   }

//   searchedUser: string = "";

//   repositoryRequest(){
    
//     interface ApiResponse{
//       repos_url: any;

//     }

//     let promise = new Promise((resolve,reject)=>{
//       this.http.get<ApiResponse>(environment.apiUrl + this.searchedUser + "?access_token=" + environment.access_token).toPromise().then(response=>{

//         this.repository.repos = response.repos_url
        
//         resolve();

//       },
//       error=>{

//         this.repository.repos = ("https://api.github.com/users/fuaad001/repos")

//         reject(error);
        
//       })
//     })

//     return promise

//   }
// }

@Injectable()
export class ReposRequestService {
	usersApiURL : string;
	
	repository: Repository;

	constructor(private _http: HttpClient) { 
		this.usersApiURL  = 'https://api.github.com/users/';		
	}

	getUserDetails(userName) {		
		return this._http.get<User>( this.usersApiURL + userName );
	}

	getRepositoryList(userName) {
		return this._http.get( this.usersApiURL + userName + '/repos');
	}

	getFollowersList(userName){
		return this._http.get( this.usersApiURL + userName + '/followers');
	}

}
// let promise = new Promise((resolve,reject)=>{
// 	this.http.get<ApiResponse>(environment.apiUrl + this.searchedUser +  environment.).toPromise().then(response=>{

// 	  this.repository.repos = response.repos_url
	  
// 	  resolve();

// 	},
// 	error=>{

// 	  this.repository.repos = ("https://api.github.com/users/fuaad001/repos")

// 	  reject(error);
	  
// 	})
//   })

//   return promise

// }
// }
// }


