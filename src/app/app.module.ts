
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { FournisseursComponent } from './Components/fournisseurs/fournisseurs.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { RoomsComponent } from './Components/rooms/rooms.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { UsersComponent } from './Components/users/users.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { AngularFireModule } from "@angular/fire/compat";
import { FormsModule } from '@angular/forms';
import { HomeDashboardComponent } from './Components/home-dashboard/home-dashboard.component';
import { VarifyEmailComponent } from './Components/varify-email/varify-email.component';// Importer AngularFirestoreModule

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    AboutComponent,
    ContactComponent,
    FournisseursComponent,
    LoginComponent,
    RegisterComponent,
    RoomsComponent,
    SettingsComponent,
    UsersComponent,
    NotFoundComponent,
    FooterComponent,
    ForgetPasswordComponent,
    HomeDashboardComponent,
    VarifyEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp( {
      apiKey: "AIzaSyCDRFhSlNyx8eveZENQzPGsffYY5pbNpGA",
      authDomain: "smarthousepfa.firebaseapp.com",
      databaseURL: "https://smarthousepfa-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "smarthousepfa",
      storageBucket: "smarthousepfa.appspot.com",
      messagingSenderId: "719581488985",
      appId: "1:719581488985:web:55b87aeb4d2bf74e108e48"
  }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
