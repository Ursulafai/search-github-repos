import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatCardModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SearchService} from './search.service';
import {FormsModule} from '@angular/forms';
import {BASE_URL, BASE_URL_TOKEN} from './config';
import {HttpClientModule} from '@angular/common/http';
import { RepoCardComponent } from './repo-card/repo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    RepoCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatGridListModule,
    MatCardModule,
  ],
  providers: [
    {provide: BASE_URL_TOKEN, useValue: BASE_URL},
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
