import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserfilterPipe } from './pipes//userfilter.pipe';
import { UserService } from './shared//serives/user.service';
import { UserShowComponent } from './compenets/user-show/user-show.component';
import { SearchBarComponent } from './compenets/search-bar/search-bar.component';
import { UserComponent } from './compenets/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    UserfilterPipe,
    UserShowComponent,
    SearchBarComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
