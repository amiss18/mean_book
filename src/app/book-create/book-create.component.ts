import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Book } from './../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {


  book: Book;
  rForm: FormGroup;
  name = '';
  minDescription = 30;
  maxDescription = 3000;
  minTitle = 10;
  maxTitle = 200;

  title = '';
  isbn = '';
  description = '';
  author = '';



  constructor(public _bookService: BookService, private _router: Router, private fb: FormBuilder ) {
   /* this.rForm = fb.group({
      'name' : [null, Validators.required],
     // 'description' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
   //   'validate' : ''
    });
    */
    this.createForm();
     }

  ngOnInit() {
  }

  createForm() {
    this.rForm = this.fb.group({
      isbn: ['', Validators.required],
      author: ['', Validators.required],
      title: ['', Validators.compose([Validators.required, Validators.minLength(this.minTitle), Validators.maxLength(this.maxTitle)]) ],
      description : ['', Validators.compose([Validators.required, Validators.minLength(this.minDescription),
                  Validators.maxLength(this.maxDescription)])],
    });
  }


  saveBook( book: Book ) {
    /*
    this.isbn = book.isbn;
    this.author = book.author;
    this.title = book.title;
    this.description = book.description;
    */
   this.book = book;
   this._bookService.createBook( this.book ).subscribe( b => {
    console.log("send =" );
   })
   ;

 /*
  fetch('http://localhost:8000/books', {
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(book)
}).then(function(responseObj) {
  console.log('status: ', responseObj.status);
});
*/
    this._router.navigate(['/books']);
  // console.log("send =" + JSON.stringify(book));
   }
}
