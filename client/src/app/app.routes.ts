import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RoutesTestingComponent } from './componentes/routes-testing/routes-testing.component';
import { ThirdComponent } from './componentes/third/third.component';
import { HomeComponent } from './componentes/home/home.component';
import { ChildComponent } from './componentes/child/child.component';
import { ChildistComponent } from './componentes/childist/childist.component';

export const routes: Routes = [
  {
    path: '',
    component: ChildComponent,
    title: 'RoutesAdress?'
  },
  {
    path: 'childist',
    component: ChildistComponent,
    title: 'third'
  }
];
