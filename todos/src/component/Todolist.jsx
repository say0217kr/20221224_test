import { useTodoState } from "../context/todos";
import TodoItem from "./TodoItem";

function Todolist() {
    const state = useTodoState();
    return (
        <ul>
            {state.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}

export default Todolist;
