import React from 'react'
import { ITodo } from '../interfaces'
import { InputGroup, FormControl } from 'react-bootstrap'
import './todoList.css'

type TodoListProps = {
    todos: ITodo[],
    onToggle(id: number): void,
    onRemove: (id: number) => void,
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {

    if (todos.length === 0) {
        return <p className="center">Добавьте новые дела</p>
    }

    const removeHandler = (e: React.MouseEvent, id: number) => {
        e.preventDefault()
        onRemove(id)
    }

    return (


        <ul>
            {todos.map(todo => {
                const classes = ['todo']
                if (todo.complited) {
                    classes.push('complited')
                }

                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label className='listLabel'>
                            {/* <input type="checkbox" checked={todo.complited} onChange={onToggle.bind(null,todo.id)} />
                            <span>{todo.title}</span>
                            <i className="material-icons red-text" onClick={e=>removeHandler(e,todo.id)}>delete</i> */}

                            {/* <InputGroup.Checkbox aria-label="Checkbox for following text input"  checked={todo.complited} onChange={onToggle.bind(null,todo.id)}  />
                            <span>{todo.title}</span>
                            <i className="material-icons red-text" onClick={e=>removeHandler(e,todo.id)}>delete</i>  */}
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox aria-label="Checkbox for following text input" className='checkbox'  checked={todo.complited} onChange={onToggle.bind(null,todo.id)} />
                                </InputGroup.Prepend>
                            </InputGroup>
                            <span className='listValue'>{todo.title}</span>
                            <svg onClick={e=>removeHandler(e,todo.id)} className='deleteIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="25px" height="25px"><path fill="#E04F5F" d="M504.1,256C504.1,119,393,7.9,256,7.9C119,7.9,7.9,119,7.9,256C7.9,393,119,504.1,256,504.1C393,504.1,504.1,393,504.1,256z"/><path fill="#FFF" d="M285,256l72.5-84.2c7.9-9.2,6.9-23-2.3-31c-9.2-7.9-23-6.9-30.9,2.3L256,222.4l-68.2-79.2c-7.9-9.2-21.8-10.2-31-2.3c-9.2,7.9-10.2,21.8-2.3,31L227,256l-72.5,84.2c-7.9,9.2-6.9,23,2.3,31c4.1,3.6,9.2,5.3,14.3,5.3c6.2,0,12.3-2.6,16.6-7.6l68.2-79.2l68.2,79.2c4.3,5,10.5,7.6,16.6,7.6c5.1,0,10.2-1.7,14.3-5.3c9.2-7.9,10.2-21.8,2.3-31L285,256z"/></svg>
                        </label>
                    </li>

                )
            })}

        </ul >




    )
}