import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { AuthModuleComponent } from "./user/auth-module/auth-module.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, AuthModuleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clips';
}
