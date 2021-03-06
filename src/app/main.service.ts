import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MainService {
  
  constructor(private http: HttpClient) { }

  getProfile(name:string){
    return this.http.get("https://api.github.com/users/"+name+"?access_token="+'6f76836cc5dab677562f5dc22673565fb2714284');
  }

  getRepos(url){
    return this.http.get(url);
  }
  getRepo(name){
    return this.http.get("https://api.github.com/repos/"+name);
  }
}
