import React from 'react';

export function CardItem(props) {
   return (
       <li className='cards__item'>
       <a target="_blank" href={props.path} rel="noreferrer" className="cards__item__link">
           <figure className='cards__item__pic-wrap' data-category={props.label}>
             <img
               className='cards__item__img'
               alt='Project Logo'
               src={props.src}
             />
           </figure>
           <div className='cards__item__info'>
             <h5 className='cards__item__text'>{props.text}</h5>
           </div>
       </a>
       </li>
   );
 }


 export default CardItem;
