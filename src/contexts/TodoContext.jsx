import React, { createContext, useContext, useMemo, useRef, useState } from 'react';

export const TodoContext = createContext()

export const useTodo = () => useContext(TodoContext)

const TodoProvider = (props) => {
    const [data, setData] = useState([
        {id : 1, text: '아침먹기', isChk : true},
        {id : 2, text: '점심먹기', isChk : false},
        {id : 3, text: '저녁먹기', isChk : true},
        {id : 4, text: '간식먹기', isChk : true},
        {id : 5, text: '야식먹기', isChk : false}
    ])
    const no = useRef(data.length + 1)
    const [text, setText] = useState('')
    const onDel = (id) => {
        setData(data.filter(item => item.id !== id ))
    }

    const onToggle = (id) => {
        setData(data.map(item => item.id === id ? {...item, isChk:!item.isChk} : item))
    }
    
    const onAdd = (text) => {
        setData([
            ...data,
            {
                id: no.current++,
                text : text,
                isChk: false
            }
        ])
        setText('')
    }

    const changeInput = (e) => {
        const { value } = e.target
        setText(value)
    }

    const value = useMemo( () => ({data, onDel, onToggle, onAdd, changeInput, text}), [data, onDel, onToggle, onAdd, changeInput, text])
    return (
        <TodoContext.Provider value={value}>
            {props.children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;