import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { FirstNavComponent } from './pages/first-nav/first-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


const routes: Routes = [
  { path: '', redirectTo: 'first-navigation', pathMatch: 'full'},
  { path: 'first-navigation', component: FirstNavComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FirstNavComponent
  ],
  imports: [
      BrowserModule,
      MatInputModule,
      MatCardModule,
      MatListModule,
      MatIconModule,
      MatButtonModule,
     [RouterModule.forRoot(routes)],
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  export class AppRoutingModule {}
