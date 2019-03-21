import { UserData } from './interfaces/userData.interface';
import { User } from './interfaces/user.interface';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from './../../services/data.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  form: FormGroup;
  showed = false;
  hasData = false;
  user: User | any;
  userData: UserData | any;

  @Output()name = new EventEmitter();

  constructor(private service: DataService, private fb: FormBuilder) {
    this.form = fb.group({
      username: []
    });
  }

  ngOnInit() {}

  get username() {
    return this.form.get('username');
  }

  getUserId() {
    this.service.getUserId(this.username.value)
      .subscribe(response => {
        this.showed = true;
        this.user = response;
        const resu = forkJoin(
          this.service.getUserData(this.user.items[0].login),
          this.service.getUserRepos(this.user.items[0].login)
        ).subscribe((userDataResponse: User|any) => {
          this.showed = false;
          this.hasData = true;
          console.log(userDataResponse);
          this.joinInfo(userDataResponse[0], userDataResponse[1]);
          });
        });
  }

  joinInfo(data, repositories) {
    this.userData = {
      avatar_url : data.avatar_url,
      name: data.name,
      following: data.following,
      company: data.company,
      blog: data.blog,
      location: data.string,
      created_at: data.created_at,
      html_url: data.html_url
    };
    console.log(this.userData);
  }
}
