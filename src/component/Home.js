import React, { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Modal from './Modal';
import NewCard from './NewCard';

import '../App.css'

const Home = () => {

    const [modal, setModal] = useState(null)
    const [cards, setCard] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addCard')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://mobirise.com/blocks/assets/images/jumbotron178.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center flex just">
                <div className='grid grid-cols-3 gap-9 mt-[-700px]'>
                    <div className="card w-80 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h1>Todo</h1>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h1>Progress</h1>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h1>Done</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-content text-center flex just">
                <div className='grid grid-cols-3 gap-9 mt-[-250px] h-80'>

                    <div className="card w-80 bg-base-100 shadow-sm">

                        <div className="card-body">

                            {cards && cards.map((card, index) => <NewCard
                                key={card._id}
                                card={card}
                            />)

                            }

                            <label htmlFor="add-card" className="btn modal-button btn-secondary " onClick={setModal}>Add card</label>
                        </div>

                    </div>



                    <div className="card w-80 bg-base-100 shadow-sm">
                        <div className="card-body">
                            <h1>Progress</h1>
                        </div>
                    </div>

                    <div className="card w-80 bg-base-100 shadow-sm">
                        <div className="card-body">
                            <h1>Done</h1>
                        </div>
                    </div>
                </div>
            </div>

            {modal && <Modal />}
        </div>
    );
};

export default Home;