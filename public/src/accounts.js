function findAccountById(accounts, id) {
  for (let account of accounts) {
    if (account.id === id) {
      return account;
    }
  }
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((acct1, acct2) =>
    acct1.name.last.toLowerCase() > acct2.name.last.toLowerCase() ? 1 : -1
  );
}

function getTotalNumberOfBorrows(account, books) {
  let count = 0;
  books.forEach((book) => {
    book.borrows.forEach((item) => {
      if (item.id === account.id) {
        count++;
      }
    });
  });
  return count;
}

function getBooksPossessedByAccount(account, books, authors) {
  const result = [];
  const authorAdded = [];
  books.forEach((book) => {
    authors.forEach((author) => {
      if (book.authorId === author.id) {
        authorAdded.push({...book, author});
      }
    });
  });
  authorAdded.filter((acct) => {
    if (acct.borrows[0].id === account.id && !acct.borrows[0].returned) {
      result.push(acct);
    }
  });
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
