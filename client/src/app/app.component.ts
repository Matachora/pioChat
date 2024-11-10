import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './modulos/nav-bar/nav-bar.component';
import { NavBar2Component } from './modulos/nav-bar-2/nav-bar-2.component';
  
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, NavBar2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
app = "holamundo"
}
