import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './search/search-input/search-input.component';
import { LoginComponent } from './user/login/login.component';
import { ButtonModule } from 'primeng/button';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    SearchInputComponent,
    LoginComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //FormsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
