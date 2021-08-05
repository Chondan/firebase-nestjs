import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { Book } from './books.model';
import { BooksService } from './books.service';
import { GetBookArgs } from './dto/args/get-book.args';
import { CreateBookInput } from './dto/input/create-book.input';

@Resolver(() => Book)
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  @Query(() => Book, { name: 'book', nullable: false })
  async getBook(@Args('getBookArgs') getBookArgs: GetBookArgs): Promise<Book> {
    const { id } = getBookArgs;
    const book = await this.booksService.getBook(id);
    return book;
  }

  @Query(() => [Book], { name: 'books' })
  async getBooks(): Promise<Book[]> {
    const books = await this.booksService.getBooks();
    return books;
  }

  @Mutation(() => Book, { name: 'createBook' })
  async createBook(
    @Args('createBookInput') createBookInput: CreateBookInput,
  ): Promise<Book> {
    const book = await this.booksService.createBook(createBookInput);
    return book;
  }
}
