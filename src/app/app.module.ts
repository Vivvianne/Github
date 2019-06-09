import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {DateShowPipe} from './date-show.pipe'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RepositoryComponent } from './repository/repository.component';
import { CustomDirective } from './custom.directive';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RepositoryComponent,
    CustomDirective,
    DateShowPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [ DateShowPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
