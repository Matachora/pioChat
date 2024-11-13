import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';


  
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  
// constructor(private _pantallaService: PantallaService, private _authService: AuthService){
//   this._authService.check().subscribe(
//     res => {
//       if (res) {
//         this._pantallaService.ObtenerSession();
//         this._pantallaService.DefinirPermisosVisualización();
//       }
//     }
//   )
// }
}
