
let books =[
    {id:1,by:'Katie Daynes',buy:'19',year:'2019',title:"Book 1",subtitle:"What is a virus?",link:"https://training.pyther.com/yara/15-day/03-BookStore/books/9781474991513_cover_image.jpg"},
    {id:2,by:'Swathi Roy',buy:'12',year:'2018',title:"Book 2",subtitle:"Ready for Writing",link:"https://training.pyther.com/yara/15-day/03-BookStore/books/9781474986694_cover_image.jpg"},
    {id:3,by:'Yashwanti S',buy:'17',year:'2001',title:"Book 3",subtitle:"Springtime",link:"https://training.pyther.com/yara/15-day/03-BookStore/books/9781474985420_cover_image.jpg"},
    {id:4,by:'Kapish K',buy:'26',year:'2015',title:"Book 4",subtitle:"Billy Mini Monsters",link:"https://training.pyther.com/yara/15-day/03-BookStore/books/9781474978439_cover_image.jpg"},
    {id:5,by:'Ishika A',buy:'14',year:'2014',title:"Book 5",subtitle:"The Infinity Files",link:"https://training.pyther.com/yara/15-day/03-BookStore/books/9781474972208_cover_image.jpg"},
    {id:6,by:'Abhhash J',buy:'24',year:'2005',title:"Book 6",subtitle:"The Unhurry Book",link:"https://training.pyther.com/yara/15-day/03-BookStore/books/9781474970495_cover_image.jpg"},
    {id:7,by:'Pranay Jain',buy:'20',year:'2012',title:"Book 7",subtitle:"Sleeping Prince",link:"https://training.pyther.com/yara/15-day/03-BookStore/books/9781474969802_cover_image.jpg"},
    {id:8,by:'Rahul B',buy:'19',year:'2007',title:"Book 8",subtitle:"The Shark Caller",link:"https://training.pyther.com/yara/15-day/03-BookStore/books/9781474966849_cover_image.jpg"}
];

export var getBooks = ()=>{
    return books;
}
export var getBookById = (id) =>{
    var list = books.filter((item)=>(item.id==id));
    if(list.length > 0){
        return list[0];
    }else{
        return {}
   }
}

/*
export var addBook = (book)=>{
    book.id = Date.now();
    books.push(book);
}

export var deleteBook = (id) =>{
    books = books.filter((item)=>(item.id!=id));
  }

export var updateBook = (book) =>{
    var list = books.filter((item)=>(item.id==book.id));
    if(list.length > 0){
         list[0].name = book.name;
         list[0].email = book.email;
         list[0].phone = book.phone;
         list[0].address = book.address;
    }
}
*/
