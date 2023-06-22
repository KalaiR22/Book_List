import React from "react";
import ReactDOM from "react-dom";

import './index.css';

const books=[
    {   id:'1',
        author:'Amelia Hepworth',
        tittle:'I love you to the moon and back',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr1XZfZYiheGEWFPKh2sw1uJLYlsNTub82KQ&usqp=CAU',
    },
     {  id:'2',
        author:'Ann Paul',
        tittle:'If animals kissed good night ',
        img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRv94rpLFPzakN0S4P9UorjwWUVnO-53zlGiub8-hdQd9H3pIJWGuOnG8JDOpM66H4NZJiZwolKN60KmFi_wpI8YIA1sMcnvu9Pj-VHLygSDaHSr8ZYW_ubRA&usqp=CAc',
    },
     {  id:'3',
        author:'Tim Warnes',
        tittle:'I Love You Forever and a Day ',
        img:'https://m.media-amazon.com/images/I/51-MjHocbcL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg',
    },
    {   id:'4',
        author:'Emily Winfield Martin',
        tittle:'The wonderful things you will be',
        img:'https://m.media-amazon.com/images/I/51gEY86ijML._SX198_BO1,204,203,200_QL40_FMwebp_.jpg',
    },
    {   id:'5',
        author:'Antoine de Saint-Exupéry',
        tittle:'The little prince',
        img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSMgjCMEZ_pm12rlmFHExbXekmGNvh-x2GEI78SaeG_UVWFk1cF8ikNE7S8uTkvqQmW9vYVIStozzIL2ubd_K4k6X4QiSLGJEwOzejAIOa3tkR-MZ35Niu2VNHxDZ6leKb3-xE&usqp=CAc',
    },
    {   id:'6',
        author:' Kelly Barnhill',
        tittle:'The Girl Who Drank the Moon',
        img:'https://m.media-amazon.com/images/I/51k1xKv4c0L._SX323_BO1,204,203,200_.jpg',
    },

];

function Booklist(){
    return(
        <section className="Booklist">
            
            {
                books.map((book)=>{
                    return <Book key ={book.id} {...book}/>
                })
            }
            
        </section>
    );
}


const Book = ({author,tittle,img}) => {
    return(
        <article className="book">
            <img src={img} alt="" />
            <h1>{tittle}</h1>
            <h4>{author}</h4>
        </article>
    );
}



ReactDOM.render(<Booklist/>,document.getElementById("root"));
