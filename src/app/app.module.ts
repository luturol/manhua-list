import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MyTableComponent } from './my-table/my-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NotificationComponent } from './notification/notification.component'; 
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutinModule } from './app-routin.module';
import { HomeComponent } from './home/home.component';
import {MatTabsModule} from '@angular/material/tabs';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SpinnerComponent } from './spinner/spinner.component';
import { CreateMangaComponent } from './create-manga/create-manga.component';
import {MatSelectModule} from '@angular/material/select';
import { Http500 } from './helpers/http-500';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyTableComponent,    
    NotificationComponent, 
    HomeComponent, 
    SpinnerComponent, 
    CreateMangaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule, 
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    AppRoutinModule,
    MatTabsModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatSelectModule
  ],
  providers: [ Http500,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Http500,
      multi: true,
    }],
  bootstrap: [AppComponent],
  entryComponents: [NotificationComponent, CreateMangaComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fab);
    library.addIconPacks(fas);
  }
 }
