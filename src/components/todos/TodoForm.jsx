import { useTodo } from '../../contexts/TodoContext';

const TodoForm = () => {
    const {onAdd, changeInput, text} = useTodo()
    const onSubmit = e => {
        e.preventDefault()
        onAdd(text)
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" onChange={changeInput} value={text} />
        </form>
    );
};

export default TodoForm;