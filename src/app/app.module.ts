import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
