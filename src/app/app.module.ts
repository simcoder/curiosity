import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { reducers } from './data/store/reducer/app.reducer';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { AppEffects } from './data/store/effects/app.effects';
import { environment } from 'src/environments/environment';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { EnlargeImgDialogComponent } from './components/enlarge-img-dialog/enlarge-img-dialog.component';

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? []
  : [];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomePageComponent,
    ClientFormComponent,
    EnlargeImgDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AppEffects]),
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  providers: [DatePipe],
  entryComponents: [
    EnlargeImgDialogComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
