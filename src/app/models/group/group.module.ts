import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class GroupModule {
  constructor(
    public name: string,
    public members: Array<Object>
  ) {}
}
