import React from 'react';
import ReactPlayer from 'react-player/youtube';

function VideoCard(props) {
    return (
        <div className='cards__item'>
            <a target="_blank" href={props.path} rel="noreferrer" className="cards__item__link">
                <figure className='cards__item__pic-wrap' data-category={props.label}>
                    <ReactPlayer className='cards__item__img'
                        url={props.src}
                        controls={true}
                        width='100%'
                        height='100%'
                    />
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{props.text}</h5>
                </div>
            </a>
        </div>
    );
}



export default VideoCard;
