import React, {useState} from "react";
import s from './News.module.css'

type TodoType = {
    userId: number
    id: number
    title: string
    completed: boolean
}
type TodosListType = Array<TodoType>
// {albumId: 1, id: 1, title: "accusamus beatae ad facilis cum similique qui sunt",
// url: "https://via.placeholder.com/600/92c952", thumbnailUrl: "https://via.placeholder.com/150/92c952"}

type PhotoType = {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}
type PhotosListType = Array<PhotoType>

function News() {

    const [todos, setTodos] = useState<TodosListType>([])
    const [photos, setPhotos] = useState<PhotosListType>([])

    //TODO разобраться с ошибками после выполнения fetch

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(
            (response) => {
                if (response.ok) {
                    return response.json()
                }
            }
        )
        .then(
            (data) => {
                setTodos([...data.splice(0, 10)])
            }
        )
        .catch(err => console.log(err + ' in todos request'))

    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(
            (response) => {
                if (response.ok) {
                    return response.json()
                }
            }
        )
        .then(
            (data) => {
                setPhotos([...data.splice(0, 10)])
                // console.log(data[0])
            })
        .catch(
            (err) => {
                console.log(err + ' in photos request')
            }
        )


    const todosElement = todos.map(td => {
        return <li key={td.id} className={s.list_item + ' ' + (!td.completed && s.uncompleted)}>
            <div>{td.title}</div>
        </li>
    })
    const photosElement = photos.map(ph => {
        return <li key={ph.id}>
            <p>{ph.title}</p>
            <img src={ph.url} alt=""/>
        </li>
    })

    return (
        <>
            <ul className={s.list}>
                {todosElement}
            </ul>
            <ul>
                {photosElement}
            </ul>
        </>
    )
}

export default News;