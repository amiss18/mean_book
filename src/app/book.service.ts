import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Book } from './book';

import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

import { map, filter, mergeMap, catchError, timeInterval, take, debounceTime } from 'rxjs/operators';
import { Observable, Subject, ReplaySubject, interval } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = 'http://localhost:8000';
  // private book = new Book();
  constructor(private _http: HttpClient) { }

  getBooks() {
  return this._http.get<Book>(this.baseUrl + '/books')
             .pipe(
               map((response) => response ),
               debounceTime(500),

               catchError(this.errorHandler)
             ) ;
  }

  getBook( id: Number ) {
    return this._http.get<Book>(`${this.baseUrl}/books/${id}`)
               .pipe(
                 map(response => response ),
                 catchError(this.errorHandler)
               ) ;
    }

  createBook( book: Book): Observable<Book> {

    // post, delee
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    // console.log(`in ser== : ${JSON.stringify(book)}`);
    console.log(`url= ${this.baseUrl}/books`);
      return this._http.post<Book>( `${this.baseUrl}/books`, JSON.stringify(book), httpOptions )
      .pipe(
       // debounceTime(500),

        catchError(this.errorHandler)
      ) ;
  }

  deleteBook(id: any): any {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
   // return this._http.delete(this.baseUrl+'/user/'+id,this.options).map((response:Response)=>response.json())
    return this._http.delete( `${this.baseUrl}/books/${id}`, httpOptions )
    .pipe(
      map( r => console.log("sccess :" + r)),
      catchError(this.errorHandler)
     ) ;
}

 updateBook( book: Book, id :any): Observable<Book> {
  // post, delee
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  console.log(`url = ${this.baseUrl}/books/${id}`);
    return this._http.put<Book>( `${this.baseUrl}/books/${id}`, JSON.stringify(book), httpOptions )
    .pipe(
      catchError(this.errorHandler)
    ) ;
}

  errorHandler(error: Response): Observable<any> {
  //  console.log(`Something bad happened; please try again later`);
    return Observable.throw(error || 'Something bad happened; please try again later.');
  }
}
