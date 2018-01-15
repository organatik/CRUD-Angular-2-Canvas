import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CanvasComponent} from '../components/canvas/canvas.component';
import {ContactPageComponent} from '../components/contact-page/contact-page.component';
import {GroupPageComponent} from '../components/group-page/group-page.component';

const routes: Routes = [
  { path: '', component: ContactPageComponent },
  { path: 'canvas', component: CanvasComponent },
  { path: 'groups', component: GroupPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
