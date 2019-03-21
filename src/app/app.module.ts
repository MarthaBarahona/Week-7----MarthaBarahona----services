import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { DisplayDataComponent } from './components/display-data/display-data.component';
import { UserReposComponent } from './components/user-repos/user-repos.component';
import { UserFollowersComponent } from './components/user-followers/user-followers.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DisplayDataComponent,
    UserReposComponent,
    UserFollowersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
