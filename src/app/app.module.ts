import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookService} from './book.service';

import { appRoutes } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookEditComponent } from './book-edit/book-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookCreateComponent,
    BookDetailsComponent,
    BookEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),

    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
