import { useTodo } from '../../contexts/TodoContext';

const TodoItem = ({item}) => {
    const {id, text, isChk} = item
    const {onDel, onToggle} = useTodo()
    return (
        <li style={{color:isChk ? 'tomato' : 'black', textDecorationLine:isChk ? 'line-through' : 'none'}}>
            <input type="checkbox" checked={isChk} onChange={() => onToggle(id)} />
            {id}/{text}
            <button onClick={() => onDel(id)}>삭제</button>
        </li>
    );
};

export default TodoItem;