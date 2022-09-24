import React from 'react';

const NewCard = ({ card }) => {
    console.log(card);
    return (
        <div className="card card-compact w-48 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{card.title}</h2>                
            </div>
        </div>
    );
};

export default NewCard;