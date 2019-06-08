import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  constructor(private location:Location,  private router:Router,private route:ActivatedRoute, private mainservice:MainService) { }

  reponame: string;
  repoDetails:any;


  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.reponame = params.get('name');
      console.log(this.reponame)
    })
    this.mainservice.getRepo(this.reponame).subscribe(res =>{
      this.repoDetails = res;
      alert(res)
    })
  }
  
  back(){
    this.location.back();
  }

}
