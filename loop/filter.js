

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumber = myNums.filter( (number) =>(number > 4 && number <7))

console.log(newNumber);



console.log(myNums.filter( (number) =>(number > 6)));


// The filter with Arrow function 

const myNum2 =  myNums.filter((num)=>{

  return  num === 5
})


console.log(myNum2);



// The filter with like real world project 


const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", year: 1960 },

    { title: "1984", author: "George Orwell", genre: "Dystopian", year: 1949 },

    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", year: 1925 },

    { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", year: 1813 },

    { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction", year: 1951 },

    { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", year: 1937 },

    { title: "Moby Dick", author: "Herman Melville", genre: "Adventure", year: 1851 },

    { title: "War and Peace", author: "Leo Tolstoy", genre: "Historical", year: 1869 },

    { title: "The Alchemist", author: "Paulo Coelho", genre: "Philosophical", year: 1988 },

    { title: "Brave New World", author: "Aldous Huxley", genre: "Science Fiction", year: 1932 }
  ];
  

  const myBooks = books.filter((book) => (book.genre === "Philosophical" && book.year >= 1988))

  console.log(myBooks)