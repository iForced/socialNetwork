import React, {useState} from "react";
import s from './News.module.css'

type TodoType = {
    userId: number
    id: number
    title: string
    completed: boolean
}
type TodosList = Array<TodoType>

function News() {
    // const getTodos = async () => {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    //     const todos: TodosList = await response.json()
    //     return todos.splice(0, 10).map(td => td.title)
    //     // console.log(todos)
    // }
    // getTodos()

    const [state, setState] = useState<TodosList>([])

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            if (response.ok) {
                return response.json()
            }
        })
        .then(
            (data) => {
                setState([...data.splice(0, 10)])
            }
        )
        .catch(err => console.log(err))

    const todosElement = state.map(td => {
        return <li key={td.id} className={s.list_item + ' ' + (!td.completed && s.uncompleted)}>
            <div>{td.title}</div>
        </li>
    })

    return (
        <ul className={s.list}>
            {todosElement}
        </ul>
    )
}

export default News;