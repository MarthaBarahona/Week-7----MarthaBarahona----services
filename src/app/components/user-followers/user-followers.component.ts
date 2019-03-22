import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-followers',
  templateUrl: './user-followers.component.html',
  styleUrls: ['./user-followers.component.scss']
})
export class UserFollowersComponent implements OnInit {
  @Input() userFollowers: [{}];
  constructor() { }

  ngOnInit() {
  }

}
