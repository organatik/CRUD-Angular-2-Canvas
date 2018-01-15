import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class UserModule {
  constructor(
    public name: string,
    public surname: string,
    public age: number,
    public group: string,
    public desciption: string,
    public note: string
  ) {}
}
