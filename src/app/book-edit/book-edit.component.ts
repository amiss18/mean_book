import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Book } from './../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {


  book :Book;
  rForm: FormGroup;
  name = '';
  minDescription = 30;
  maxDescription = 3000;
  minTitle = 10;
  maxTitle = 200;




  constructor( private bookService: BookService, private route: ActivatedRoute, private _router: Router, private fb: FormBuilder ) {
    this.createForm();
     }


     ngOnInit() {
    this.getBook( this.route.snapshot.params['id'] );
  }
  getBook( id: Number) {
    this.bookService.getBook(id).subscribe( b => {
    this.book = b;
    });
  }

  createForm() {
    this.rForm = this.fb.group({
      isbn: ['', Validators.required],
      author: ['', Validators.required],
      title: ['', Validators.compose([Validators.required, Validators.minLength(this.minTitle), Validators.maxLength(this.maxTitle)]) ],
      description : ['', Validators.compose([Validators.required, Validators.minLength(this.minDescription),
                  Validators.maxLength(this.maxDescription)])],
    }, { updateOn: 'submit'});
    // this.onChanges();
  }


  saveBook( book: Book, id: any ) {
   this.book = book;
   this.bookService.updateBook( book , id ).subscribe( b => {
    console.log(`book:${book.isbn}`)
   this._router.navigate(['/details', id]);
   })
   ;
   }

   onChanges(): void {
    this.rForm.valueChanges.subscribe(val => {
      console.log("update =" );
    });
  }
}
