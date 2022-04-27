import React, { useState } from 'react';
import "./App.css";



const ToDo = () => {

    // to do code  

    const [myList, setMyList] = useState([]);
    const [todoText, setTodoText] = useState("");

    const addTodo = (text) => {
        if (!text || /^\s*$/.test(text)) {
            return
        }
        let newList = [text, ...myList]
        setMyList(newList)
    }

    const handleClick = async (e) => {
        e.preventDefault();
        console.log('clicked')
        addTodo(todoText);
        setTodoText('');
    };

    const handleChange = (e) => {
        e.preventDefault();
        setTodoText(e.target.value);
    };

    const remove = (e) => {
        // myList.splice(id,1)
        let id = e.target.id
        let newList = myList.filter((element) => {
            return element !== myList[id]
        })

        setMyList(newList)
        console.log(e.target.id)
        console.log(myList[e.target.id])
    }


    let itemList = myList.map((item, index) => {
        return (<li key={index} className="mb-3 fs-5">{item}
            <button type="button" id={index} className="btn btn-sm ms-3 btn-danger"
                onClick={remove}>Remove</button>
            <hr /> </li>)
    })





    return (
        <div className="px-auto pt-5 align-items-center courier d-flex">
            <div className="bg-dark border rounded align-items-center container-fluid">
                <h3 className="align-items-center text-center pt-3 mx-auto">
                    TO DO APP
                </h3>
                <form onSubmit={handleClick}>
                    <div className="input-group mb-5">
                        <button className="btn btn-outline-secondary" type="submit"
                            id="button-addon1">ADD</button>
                        <input type="text" className="form-control" onChange={handleChange}
                            placeholder="" aria-label="Example text with button addon"
                            aria-describedby="button-addon1" value={todoText} />
                    </div>
                </form>

                <ul>
                    {itemList}
                </ul>

                <ul>

                </ul>
            </div>
        </div>
    )
}

export default ToDo;