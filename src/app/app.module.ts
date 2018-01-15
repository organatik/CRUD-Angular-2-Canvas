import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavigationsComponent } from './components/navigations/navigations.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { CanvasComponent } from './components/canvas/canvas.component';
import { GroupPageComponent } from './components/group-page/group-page.component';
import {GroupService} from './services/group.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationsComponent,
    ContactPageComponent,
    CanvasComponent,
    GroupPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    GroupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
