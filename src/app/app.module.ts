import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReglagesComponent } from './pages/reglages/reglages.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './index/navbar/navbar.component';
import { HeaderComponent } from './index/header/header.component';
import { IndexComponent } from './pages/index/index.component';
import { InfoModalComponent } from './modals/info-modal/info-modal.component';
import { ArticlesComponent } from './stock/articles/articles.component';
import { ProvidersComponent } from './stock/providers/providers.component';
import { BrandsComponent } from './stock/brands/brands.component';

@NgModule({
  declarations: [
    AppComponent,
    ReglagesComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    NavbarComponent,
    HeaderComponent,
    IndexComponent,
    InfoModalComponent,
    ArticlesComponent,
    ProvidersComponent,
    BrandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
