import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.sass']
})
export class UserReposComponent implements OnInit {
  @Input() userRepos: [{}];

  constructor() { }

  ngOnInit() {
  }

}
