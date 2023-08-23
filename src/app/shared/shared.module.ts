import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent
  ],
  declarations: [SharedComponent, NavbarComponent]
})
export class SharedModule { }
