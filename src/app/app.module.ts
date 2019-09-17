import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './core/default-layout/layout.module';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorService } from './shared/interceptors/http-interceptor.service';
import { ErrorsHandler } from './shared/interceptors/error-handler.service';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './pages/login/state/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MenuEffects } from './pages/menu/state/menu.effects';
import { menuReducer } from './pages/menu/state/menu.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AppRoutingModule,
    LayoutModule,
    EffectsModule.forRoot(
      [
        MenuEffects
      ]
    ),
    StoreModule.forRoot(
      {
        user: userReducer,
        menu: menuReducer
      }
    )
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
