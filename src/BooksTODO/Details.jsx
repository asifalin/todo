

import React, { useState } from 'react';

const Book = () => {
  const [books, setBooks] = useState([]);
  const [inputTitle, setInputTitle] = useState('');
  const [inputAuthor, setInputAuthor] = useState('');
  const [inputGenre, setInputGenre] = useState('');
  const [inputPublicationYear, setInputPublicationYear] = useState('');
  const [inputPages, setInputPages] = useState('');
  const [filter, setFilter] = useState('');

  const handleTitleChange = (e) => {
    setInputTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setInputAuthor(e.target.value);
  };

  const handleGenreChange = (e) => {
    setInputGenre(e.target.value);
  };

  const handlePublicationYearChange = (e) => {
    setInputPublicationYear(e.target.value);
  };

  const handlePagesChange = (e) => {
    setInputPages(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleAddBook = () => {
    if (inputTitle.trim() !== '' && inputAuthor.trim() !== '') {
      const newBook = {
        id: Date.now(),
        title: inputTitle,
        author: inputAuthor,
        genre: inputGenre,
        publicationYear: inputPublicationYear,
        pages: inputPages
      };
      setBooks([...books, newBook]);
      
      setInputTitle('');
      setInputAuthor('');
      setInputGenre('');
      setInputPublicationYear('');
      setInputPages('');
    }
  };
 

//   const handleDeleteBook = (id) => {
//     const filteredBooks = books.filter((book) => book.id !== id);
//     setBooks(filteredBooks);
//   };

  const filteredBooks = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(filter.toLowerCase()) ||
      book.author.toLowerCase().includes(filter.toLowerCase()) ||
      book.genre.toLowerCase().includes(filter.toLowerCase()) ||
      book.publicationYear.toString().includes(filter) ||
      book.pages.toString().includes(filter)
    );
  });

  return (
    <div className='bg-orange-500 '>
      <h1 className='font-bold'>Book Records</h1>
     
      <div className='leading-7'>
        <label htmlFor="title">Book Title:</label> <br />
        <input
          type="text"
          id="title" className='border'
          value={inputTitle}
          onChange={handleTitleChange}
          placeholder="Enter Book title"
        />
<br />
        <label htmlFor="author">Author:</label> <br />
        <input
          type="text"
          id="author" className='border'
          value={inputAuthor}
          onChange={handleAuthorChange}
          placeholder="Enter book author"
        />
<br />
        <label htmlFor="genre">Genre:</label> <br />
        <input
          type="text"
          id="genre" className='border'
          value={inputGenre}
          onChange={handleGenreChange}
          placeholder="Enter book genre"
        />
<br />
        <label htmlFor="publicationYear">Publication Year:</label> <br />
        <input
          type="text" className='border'
          id="publicationYear"
          value={inputPublicationYear}
          onChange={handlePublicationYearChange}
          placeholder="Enter book publication year"
        />
        <br />

        <label htmlFor="pages">Pages:</label> <br />
        <input
          type="number"
          id="pages" className='border'
          value={inputPages}
          onChange={handlePagesChange}
          placeholder="Enter book pages"
        />
        <br />


        <button className='bg-blue-700 p-2 text-white rounded-lg mt-5' onClick={handleAddBook}>Add Book</button>
      </div>
      

      
      <input
      className="mt-5 border-4 border-blue-700"
        type="search"
        value={filter} 
        onChange={handleFilterChange}
        placeholder="Filter "
      />

<br />
      <table className='mt-5 '>
        <thead>
          <tr>
            <th className='border'>Title</th>
            <th className='border'>Author</th>
            <th className='border'>Genre</th>
            <th className='border'>Publication Year</th>
            <th className='border'>Pages</th>
            {/* <th className='border'>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book) => (
            <tr key={book.id}>
              <td className='border'>{book.title}</td>
              <td className='border'>{book.author}</td>
              <td className='border'>{book.genre}</td>
              <td className='border'>{book.publicationYear}</td>
              <td className='border'>{book.pages}</td>
              {/* <td className='border bg-red-600 text-white' >
                <button  onClick={() => handleDeleteBook(book.id)}>Delete</button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Book;





