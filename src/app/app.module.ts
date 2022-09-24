import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsernavbarComponent } from './component/common/usernavbar/usernavbar.component';
import { UsersidebarComponent } from './component/common/usersidebar/usersidebar.component';
import { UserComponent } from './component/user/user/user.component';
import { MiddlecontentComponent } from './component/user/middlecontent/middlecontent.component';
import { RightcontentComponent } from './component/user/rightcontent/rightcontent.component';

@NgModule({
  declarations: [
    AppComponent,
    UsernavbarComponent,
    UsersidebarComponent,
    UserComponent,
    MiddlecontentComponent,
    RightcontentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
