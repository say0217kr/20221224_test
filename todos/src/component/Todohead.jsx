import styled from "styled-components";
import { useTodoState } from "../context/todos";

function Todohead() {
    const date = new Date();
    const now = date.toLocaleDateString("ko-kr", { dateStyle: "full" });
    const todos = useTodoState();
    const doneCnt = todos.filter((todo) => todo.done).length;
    return (
        <Todoheadbox>
            <Todotitle>{now}</Todotitle>
            <Todotitle>
                해야할일 : {doneCnt} / {todos.length}
            </Todotitle>
        </Todoheadbox>
    );
}

const Todoheadbox = styled.div``;

const Todotitle = styled.p``;

export default Todohead;
