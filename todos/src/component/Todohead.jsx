import { useTodoState } from "../context/todos";

function Todohead() {
    const date = new Date();
    const now = date.toLocaleDateString("ko-kr", { dateStyle: "full" });
    const todos = useTodoState();
    const doneCnt = todos.filter((todo) => todo.done).length;
    return (
        <div>
            <p>{now}</p>
            해야할일 : {doneCnt} / {todos.length}
        </div>
    );
}

export default Todohead;
