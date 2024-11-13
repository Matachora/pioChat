import { Routes } from '@angular/router';
import { HomePioChatComponent } from './modulos/home-pio-chat/home-pio-chat.component';
import { LayoutComponent } from './modulos/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  // {
  //   path: 'signed-in-redirect',
  //   pathMatch: 'full',
  //   redirectTo: 'home'
  // },
  {
    path: '',
    //canActivate: [authService],
    //canActivateChild: [authService],
    // component: HomePioChatComponent,
    children: [
      {
        path: 'home', 
        component: LayoutComponent
      },
      {
        path: 'home2', 
        component: HomePioChatComponent
      },
      //Si quieres ver tu componente usa esta base
      // {
      //   path: 'url', 
      //   component: NombreDelComponente
      // },
      //Levanta el proyecto y escirbe localhost:4200/url
      //Esto redireccionará directamente a tu componente
      //Si tienes que generar varias pantallas con url's más complejas
      // {
      //   path: 'url', 
      //   component: NombreDelComponente,
      //   children: [
      //     {
      //       path: 'url', 
      //       component: NombreDelComponente
      //     }
      //   ]
      // },
      //Esto da como resultado localhost:4200/urlparent/urlchild
    ]
  },
];

export default routes;
