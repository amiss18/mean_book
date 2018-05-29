import { Component, OnInit } from '@angular/core';
import { Book } from './../book';
import { BookService } from './../book.service';
import { Router } from '@angular/router';
import { trigger, style, state, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  animations: [
    trigger('bookState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      transition('inactive => active', animate('300ms ease-in')),
      transition('active => inactive', animate('300ms ease-out'))
    ]),



  ]
})
export class BookComponent implements OnInit {

  loading: boolean = false;
  books: Book[];
  state = 'inactive';

 // state: string = 'small';


  constructor( private bookService: BookService, private _router: Router ) { }


  ngOnInit() {
      this.bookService.getBooks()
      .subscribe( (books) => {
      this.books = books;
      this.loading = true;
    }, (error) => {
      console.log(`une erreur est : ${error}`);
    }
    );

  }

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }


  remove(book: Book ) {
    this.toggleState();
    const index = this.books.indexOf(book);
    //console.log(`id supp =${index}`);
    this.bookService.deleteBook(book._id)
    .subscribe();
    this.books.splice(index, 1);
  }

 

}
