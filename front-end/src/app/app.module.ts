import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TokenInterService } from './services/token-inter.service';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SigninComponent } from './pages/signin/signin.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { AccountComponent } from './pages/account/account.component';
import { ContentComponent } from './pages/content/content.component';
import { HomeComponent } from './pages/home/home.component';
import { HomePriComponent } from './pages/home-pri/home-pri.component';
import { MyalgorithmsComponent } from './pages/myalgorithms/myalgorithms.component';
import { MycasesComponent } from './pages/mycases/mycases.component';
import { TreatmentComponent } from './pages/treatment/treatment.component';
import { UploadalgorithmComponent } from './pages/uploadalgorithm/uploadalgorithm.component';
import { UploadcaseComponent } from './pages/uploadcase/uploadcase.component';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidebarComponent,
    SigninComponent,
    LoginComponent,
    HeaderComponent,
    AccountComponent,
    ContentComponent,
    HomeComponent,
    HomePriComponent,
    MyalgorithmsComponent,
    MycasesComponent,
    TreatmentComponent,
    UploadalgorithmComponent,
    UploadcaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
