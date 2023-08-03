import React, { Component } from 'react'

const statusColors = {
    "Not Started": "transparent",
    "In Progress": "#FEFBE5",
    "Completed": "#D7FDDC",
};

export class ToDoList extends Component {

    constructor() {
        super();
        this.state = {
            toDoList: {}
        }
        console.log(this.state.toDoList)
    }

    handleAddToDo = (e) => {

        e.preventDefault();
        const toDoItem = e.target.todoitem.value

        const newState = { ...this.state.toDoList }
        newState[toDoItem] = { status: "Not Started" }

        this.setState({
            toDoList: newState
        })

        console.log(newState)
    }

    removeToDo = (key) => {
        const newState = { ...this.state.toDoList }
        delete newState[key]
        this.setState({
            toDoList: newState
        })
    }

    changeToDoStatus = (key) => {
        const newState = { ...this.state.toDoList }
        if (newState[key]['status'] === "Not Started") {
            newState[key]['status'] = "Completed"
        }
        else if (newState[key]['status'] === "In Progress") {
            newState[key]['status'] = "Completed"
        }
        else {
            newState[key]['status'] = "In Progress"
        }

        console.log(newState)
        this.setState({
            toDoList: newState
        })
    }

    render() {
        return (
            <div className="columns mt-1">
                <div className="column is-three-fifths ml-3">
                    <div className="box">
                        <form className="control has-icons-left" onSubmit={this.handleAddToDo} style={{ display: 'flex' }}>
                            <input className="input is-info" type="text" name="todoitem" placeholder="Type To-Do Item" />
                            <span className="icon is-left">
                                <i className="fas fa-check" aria-hidden="true"></i>
                            </span>
                            <button className="button is-success ml-3">
                                Add Item
                            </button>
                        </form>
                    </div>


                    <p className="menu-label">
                        To-Do List
                    </p>
                    <ol className="box">
                        {Object.keys(this.state.toDoList).map((key,value) => {

                            const itemBackgroundColor = statusColors[this.state.toDoList[key]['status']]

                            return (
                                <div className="row" style={{ backgroundColor: itemBackgroundColor }}>
                                    <div className="columns pr-3" key={key}>
                                        <div className="column is-10 ml-3">
                                            <li>{key}</li>
                                        </div>
                                        <div className="column is-1">
                                            <button className="button is-primary is-outlined fas fa-check" aria-hidden="true" onClick={()=>this.changeToDoStatus(key)}/>
                                        </div>
                                        <div className="column is-1 pr-3">
                                            <button className="button is-primary is-danger fas fa-x" aria-hidden="true" onClick={()=>this.removeToDo(key)}/>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default ToDoList