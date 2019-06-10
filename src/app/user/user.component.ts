import { Component, OnInit } from '@angular/core';
import { MainService} from '../main.service'
import { DateShowPipe } from '../date-show.pipe';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private mainservice: MainService, private datepipe:DateShowPipe) { }
  username:string;
  userdata:any;
  repos:any;
  searching:boolean =false;
  notfound:boolean = false;
  userdate:any;


  ngOnInit() {
  }
  searchGit(){
    this.notfound =false;
    this.searching = true;
    this.mainservice.getProfile(this.username).subscribe(res=>{
   this.userdata = res
   this.userdate = this.datepipe.transform(this.userdata.created_at)
    this.mainservice.getRepos(this.userdata.repos_url).subscribe(res=>{
      this.repos = res
    },err=>{
      this.notfound = true;
      console.log(err.error.message);
      this.searching =false;
    });
    this.searching =false;
    },err=>{
      this.notfound = true;
      console.log(err.error.message);
      this.searching =false;
    })

  }

}
