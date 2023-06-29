import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { HomePriComponent } from './pages/home-pri/home-pri.component';
import { MycasesComponent } from './pages/mycases/mycases.component';
import { MyalgorithmsComponent } from './pages/myalgorithms/myalgorithms.component';
import { UploadalgorithmComponent } from './pages/uploadalgorithm/uploadalgorithm.component';
import { UploadcaseComponent } from './pages/uploadcase/uploadcase.component';
import { TreatmentComponent } from './pages/treatment/treatment.component';
import { ContentComponent } from './pages/content/content.component';
import { AccountComponent } from './pages/account/account.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'signin', component:SigninComponent},
  {path:'login', component:LoginComponent},
  {path:'private', component:HomePriComponent, canActivate: [AuthGuard]},
  {path:'mycases', component:MycasesComponent, canActivate: [AuthGuard]},
  {path:'myalgorithms', component:MyalgorithmsComponent, canActivate: [AuthGuard]},
  {path:'uploadalgorithm', component:UploadalgorithmComponent, canActivate: [AuthGuard]},
  {path:'uploadcase', component:UploadcaseComponent, canActivate: [AuthGuard]},
  {path:'treatment', component: TreatmentComponent, canActivate: [AuthGuard]},
  {path:'content', component:ContentComponent, canActivate: [AuthGuard]},
  {path:'account', component:AccountComponent, canActivate: [AuthGuard]},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
