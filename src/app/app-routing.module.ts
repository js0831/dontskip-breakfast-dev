import { NgModule } from '@angular/core'; 
import { DefaultLayoutComponent } from './core/default-layout/default-layout.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/login' },
      { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
      { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
      { path: 'menu', loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuModule) },
      { path: 'order', loadChildren: () => import('./pages/order/order.module').then(m => m.OrderModule) },
      { path: 'credits', loadChildren: () => import('./pages/credits/credits.module').then(m => m.CreditsModule) },
      { path: 'messages', loadChildren: () => import('./pages/messages/messages.module').then(m => m.MessagesModule) },
      { path: '**', redirectTo: '/login'  }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
