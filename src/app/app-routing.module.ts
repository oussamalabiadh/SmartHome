
import { FournisseursComponent } from './Components/fournisseurs/fournisseurs.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeDashboardComponent } from './Components/home-dashboard/home-dashboard.component';
import { RoomsComponent } from './Components/rooms/rooms.component';
import { UsersComponent } from './Components/users/users.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { VarifyEmailComponent } from './Components/varify-email/varify-email.component';

const routes: Routes = [
  {path:'',redirectTo:'home-dashboard',pathMatch:'full'},
  {path:'home-dashboard',canActivate:[AuthGuard],component:HomeDashboardComponent,title:'dashbord'},
  {path:'Login',component:LoginComponent,title:'login'},
  {path:'Register',component:RegisterComponent,title:'register'},
  {path:'forget-password',component:ForgetPasswordComponent,title:'forget-password'},
  {path:'varify-email',component:VarifyEmailComponent,title:'varify-email'},
  {path:'about',canActivate:[AuthGuard],component:AboutComponent,title:'about'},
  {path:'Contact',canActivate:[AuthGuard],component:ContactComponent,title:'Contact'},
  {path:'room',canActivate:[AuthGuard],component:RoomsComponent,title:'room'},
  {path:'users',canActivate:[AuthGuard],component:UsersComponent,title:'user'},
  {path:'settings',canActivate:[AuthGuard],component:SettingsComponent,title:'settings'},
  {path:'Fournisseurs',canActivate:[AuthGuard],component:FournisseursComponent,title:'Fournisseurs'},

  
  {path:'**',component:NotFoundComponent,title:'404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
