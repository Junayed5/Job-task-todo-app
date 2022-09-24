import React from 'react';

const Home = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://mobirise.com/blocks/assets/images/jumbotron178.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center flex just">
                <div className='grid grid-cols-3 gap-9 mt-[-700px]'>
                    <div className="card w-56 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h1>Todo</h1>
                        </div>
                    </div>
                    <div className="card w-56 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h1>Progress</h1>
                        </div>
                    </div>
                    <div className="card w-56 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h1>Done</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-content text-center flex just">
                <div className='grid grid-cols-3 gap-9 mt-[-250px] h-80'>
                    <div className="card w-56 bg-base-100 shadow-sm ">
                        <div className="card-body">
                        <label htmlFor="add-card" className="btn modal-button btn-secondary">Add card</label>
                        </div>
                    </div>
                    <div className="card w-56 bg-base-100 shadow-sm">
                        <div className="card-body">
                            <h1>Progress</h1>
                        </div>
                    </div>
                    <div className="card w-56 bg-base-100 shadow-sm">
                        <div className="card-body">
                            <h1>Done</h1>
                        </div>
                    </div>
                </div>
            </div>

            

            <input type="checkbox" id="add-card" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="add-card" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>

        </div>
    );
};

export default Home;