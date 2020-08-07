import React, { useState } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'


interface TodoFormProps {
    onAdd(title: string): void,
}


export const TodoForm: React.FC<TodoFormProps> = (props) => {

    const [title, setTitle] = useState<string>('')

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
    const KeyPressHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            props.onAdd(title)
            setTitle('')
        }
    }

    return (
        <div className="input-field mt2">
            <InputGroup className="mb-3" >
                <FormControl
                    onKeyPress={KeyPressHandler}
                    onChange={changeHandler}
                    value={title}
                    placeholder='Введите название дела'
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
        </div>
    )
}