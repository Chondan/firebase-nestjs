import { Injectable } from '@nestjs/common';
import { Book } from './books.model';
import { CreateBookInput } from './dto/input/create-book.input';
import { firebaseServices } from '@src/services/firebase';
const {
  client: { db },
} = firebaseServices;

@Injectable()
export class BooksService {
  async getBook(id: number): Promise<Book> {
    const bookDoc = await db.collection('books').doc(id.toString()).get();
    const book = bookDoc.data() as Book;
    return book;
  }

  async getBooks(): Promise<Book[]> {
    const booksDoc = await db.collection('books').get();
    const books = [];
    booksDoc.forEach((bookDoc) => {
      books.push(bookDoc.data());
    });
    return books;
  }

  async createBook(createBookInput: CreateBookInput): Promise<Book> {
    const { id, title, author } = createBookInput;
    const book: Book = { id, title, author };
    await db.collection('books').doc(id.toString()).set(book);
    return book;
  }
}
