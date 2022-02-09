function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const finalArray = [];
  const notReturned = [];
  const returned = [];
  books.forEach((book) => {
    if (!book.borrows[0].returned) {
      notReturned.push(book);
    } else {
      returned.push(book);
    }
  });
  finalArray.push(notReturned);
  finalArray.push(returned);
  return finalArray;
}

function getBorrowersForBook(book, accounts) {
  return (
    book.borrows.map((borrow) => {
        const account = accounts.find((account) => account.id === borrow.id);
        return {...borrow, ...account};
      })
      .slice(0, 10)
  );
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};