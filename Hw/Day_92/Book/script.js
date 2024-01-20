const p = document.getElementsByTagName("p")[0];

book = {
    author: prompt("Author Of Book"),
    title: prompt("Title Of Book"),
    year: prompt("Release Date Of Book")
};
p.innerHTML = `Author: ${book.author}, title: ${book.title}, release date: ${book.year}`

