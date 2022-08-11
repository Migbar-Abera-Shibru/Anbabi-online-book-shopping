import React from "react";
import "./EditProducts.css";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../api/api";

const EditProducts = ({ inputs, title }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [file, setFile] = useState("");
    const [state, setState] = useState({
        title: "",
        author: "",
        description: "",
        img: "test",
        category: "",
        subcategory: "",
        price: "",
        ISBN: "",
        pages: "",
        edition: "",
    });

    useEffect(() => {
        api.get(`/books/find/${id}`)
            .then((res) => setState(res.data))
            .catch((res) => console.log(res));
    }, []);

    const updateState = (e) => {
        setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const submitForm = (e) => {
        e.preventDefault();
        console.log(state);

        api.put(`/books/${id}`, state)
            .then((res) => navigate("/books"))
            .catch((res) => console.log(res));
    };

    const deleteBook = (e) => {
        e.preventDefault();

        api.delete(`/books/delete/${id}`)
            .then((res) => navigate("/books"))
            .catch((res) => console.log(res));
    };

    return (
        <div className="newProduct m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            {/* <div className="top">
          <h1>{title}</h1>
        </div> */}
            <div className="bottom">
                <div className="left">
                    <img
                        src={
                            file
                                ? URL.createObjectURL(file)
                                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                        }
                        alt=""
                    />
                </div>

                <div className="right">
                    <form onSubmit={submitForm}>
                        {/*
                        <div className="formInput">
                            <label htmlFor="file"></label>
                            <input type="file" id="file" />
                        </div>
                    */}

                        <div className="formInput">
                            <label htmlFor="file">Book Cover</label>
                            <input
                                type="text"
                                name="img"
                                value={state.img}
                                onChange={updateState}
                                required
                            />
                        </div>
                        <div className="formInput">
                            <label htmlFor="file">Book Title</label>
                            <input
                                type="text"
                                name="title"
                                value={state.title}
                                onChange={updateState}
                                placeholder="Sememen"
                                required
                            />
                        </div>
                        <div className="formInput">
                            <label htmlFor="file">Author</label>
                            <input
                                type="text"
                                name="author"
                                value={state.author}
                                onChange={updateState}
                                placeholder="Bealu Girma"
                                required
                            />
                        </div>

                        <div className="formInput">
                            <label htmlFor="file">Description</label>
                            <input
                                type="text"
                                name="description"
                                value={state.description}
                                onChange={updateState}
                                placeholder="description"
                                required
                            />
                        </div>
                        <div className="formInput">
                            <label htmlFor="file">Category</label>

                            <input
                                type="text"
                                name="category"
                                value={state.category}
                                onChange={updateState}
                                required
                            />
                        </div>
                        <div className="formInput">
                            <label htmlFor="file">Subcategory</label>
                            <input
                                type="text"
                                name="subcategory"
                                value={state.subcategory}
                                onChange={updateState}
                            />
                        </div>
                        <div className="formInput">
                            <label htmlFor="file">Price</label>
                            <input
                                type="number"
                                name="price"
                                value={state.price}
                                onChange={updateState}
                                required
                            />
                        </div>
                        <div className="formInput">
                            <label htmlFor="file">ISBN</label>
                            <input
                                type="number"
                                name="ISBN"
                                value={state.ISBN}
                                onChange={updateState}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="file">Pages</label>
                            <input
                                type="number"
                                name="pages"
                                value={state.pages}
                                onChange={updateState}
                                placeholder="pages"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="file">Edition</label>
                            <input
                                type="number"
                                name="edition"
                                value={state.edition}
                                onChange={updateState}
                                placeholder="edition"
                                required
                            />
                        </div>
                        <br />
                        <button type="submit">Update Book Information</button>

                        <button onClick={deleteBook}>Delete Book</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProducts;
