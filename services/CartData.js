
let books =[
    {id:1,by:'Katie Daynes',buy:'699',year:'2019',title:"Book 1",subtitle:"What is a virus?",link:"https://training.pyther.com/yara/15-day/03-BookStore/books/9781474991513_cover_image.jpg"},
    {id:2,by:'Swathi Roy',buy:'425',year:'2018',title:"Book 2",subtitle:"Ready for Writing",link:"https://training.pyther.com/yara/15-day/03-BookStore/books/9781474986694_cover_image.jpg"},
    {id:3,by:'Yashwanti S',buy:'574',year:'2001',title:"Book 3",subtitle:"Springtime",link:"https://training.pyther.com/yara/15-day/03-BookStore/books/9781474985420_cover_image.jpg"},
    {id:4,by:'Kapish K',buy:'860',year:'2015',title:"Book 4",subtitle:"Billy Mini Monsters",link:"https://training.pyther.com/yara/15-day/03-BookStore/books/9781474978439_cover_image.jpg"},
    {id:5,by:'Ishika A',buy:'740',year:'2014',title:"Book 5",subtitle:"The Infinity Files",link:"https://training.pyther.com/yara/15-day/03-BookStore/books/9781474972208_cover_image.jpg"},
    {id:6,by:'Abhhash J',buy:'240',year:'2005',title:"Book 6",subtitle:"The Unhurry Book",link:"https://training.pyther.com/yara/15-day/03-BookStore/books/9781474970495_cover_image.jpg"},
    {id:7,by:'Pranay Jain',buy:'600',year:'2012',title:"Book 7",subtitle:"The Sleeping Prince",link:"https://training.pyther.com/yara/15-day/03-BookStore/books/9781474969802_cover_image.jpg"},
    {id:8,by:'Rahul B',buy:'499',year:'2007',title:"Book 8",subtitle:"The Shark Caller",link:"https://training.pyther.com/yara/15-day/03-BookStore/books/9781474966849_cover_image.jpg"}
];

let cart=[
    {count:1,bookID:4},
    {count:2,bookID:2},
    {count:3,bookID:5},
    {count:4,bookID:6},
    {count:5,bookID:1}
];

export var showCart = ()=>{
    return cart;
}

export var doAdd = (data)=>{
    temp={};
    for(let i=0;i<cart.length;i++){
        if (cart[i].bookID==data){
            cart[i].count++;
        }else{
            temp['id']=1;
            temp['bookID']=data;
            cart.push(temp);
            temp={};
        }
    } 
}
export var incrementCount = (data)=>{
    for(let i=0;i<cart.length;i++){
        if (cart[i].bookID==data){
            cart[i].count++;
        }
    }
}

export var decrementCount = (data)=>{
    for(let i=0;i<cart.length;i++){
        if (cart[i].bookID==data){
            cart[i].count--;
        }
    }    
}

/*
export var doDelete = (id) =>{
    books = books.filter((item)=>(item.id!=id));
}

export var getBookById = (id) =>{
    var list = books.filter((item)=>(item.id==id));
    if(list.length > 0){
        return list[0];
    }else{
        return {}
   }
}

export var updateBook = (book) =>{
    var list = books.filter((item)=>(item.id==book.id));
    if(list.length > 0){
         list[0].name = book.name;
         list[0].email = book.email;
         list[0].phone = book.phone;
         list[0].address = book.address;
    }
}*/
