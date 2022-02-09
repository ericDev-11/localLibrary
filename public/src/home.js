function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let totalBooksBorrowed = 0;
  for (let book in books) {
    if (!books[book].borrows[0].returned) {
      totalBooksBorrowed += 1;
    }
  }
  return totalBooksBorrowed;
}

function _sortAndSpliceArray(array) {
  array.sort((item1, item2) => item2.count - item1.count);
  array.splice(5);
  return array;
}

function getMostCommonGenres(books) {
  const result = books.reduce((acc, book) => {
    let genreOfBook = book.genre;
    let genreExtra = acc.find((element) => element.name === genreOfBook);
    if (genreExtra) {
      genreExtra.count++
    } else {
      const newGenreExtra = {
       name: genreOfBook,
        count: 1,
      }
      acc.push(newGenreExtra)
    } 
    return acc
  }, [])
  return _sortAndSpliceArray(result);
}

function getMostPopularBooks(books) {
  const result = [];
  books.forEach((book) => {
    const element = {
      name: book.title,
      count: book.borrows.length
    };
    result.push(element);
  })
  return _sortAndSpliceArray(result);
}

function getMostPopularAuthors(books, authors) {
  const result = [];
  books.forEach((book) => {
    authors.forEach((author) => {
      if (book.authorId === author.id) {
        result.push({
          name: `${author.name.first} ${author.name.last}`,
          count: book.borrows.length
        });
      }
    });
  });
  return _sortAndSpliceArray(result);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
