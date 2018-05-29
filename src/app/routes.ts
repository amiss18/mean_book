import { Routes } from '@angular/router';

import { AppComponent} from './app.component';

import { BookComponent} from './book/book.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookEditComponent } from 'src/app/book-edit/book-edit.component';


export const appRoutes: Routes = [
    { path: '',
      redirectTo: '/books',
      pathMatch: 'full'
    },
    {
      path: 'books',
      component: BookComponent
    },
    {
      path: 'new',
      component: BookCreateComponent
    },
    {
      path: 'book-edit/:id',
      component: BookEditComponent,
      data: { title: 'Edit Book' }
    },
    {
      path: 'details/:id',
      component: BookDetailsComponent
    }
  ];

