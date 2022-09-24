import React from 'react';
import { toast } from 'react-toastify';

const Modal = () => {

    const handleSubmit = e => {
        e.preventDefault()

        const title = e.target.title.value;
        const status = e.target.status.value;
        const description = e.target.description.value;

        const data = { title, status, description };
        console.log(data);

        fetch('http://localhost:5000/addCard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    toast.success("successfully add card")
                } else{
                    toast.danger('you have some mistake')
                }
            })
    }


    return (
        <div>
            <input type="checkbox" id="add-card" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="add-card" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Title</span>
                                    </label>
                                    <input type="text" placeholder="title" name='title' className="input input-bordered" />
                                    <label className="label">
                                        <span className="label-text">Status</span>
                                    </label>
                                    <input type="text" placeholder="status" name='status' className="input input-bordered" />
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered" placeholder="description" name='description'></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;