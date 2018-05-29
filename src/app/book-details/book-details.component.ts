import { Component, OnInit } from '@angular/core';
import { Book } from './../book';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book = {
    _id: '',
    isbn: '',
    title: '',
    author: '',
    description: '',
    published_year: ''
  };

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBook( this.route.snapshot.params['id'] );
  }
  getBook( id: Number) {
    this.bookService.getBook(id).subscribe( b => {
    this.book = b;
    console.log(`book:${this.book}`)
    });
  }

}
