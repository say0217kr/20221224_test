import styled from "styled-components";
import { TodoProvider } from "../context/todos";
import Todobody from "./Todobody";
import Todohead from "./Todohead";

function Todo() {
    return (
        <Contain>
            <Item>
                <TodoProvider>
                    <h1 className="title">할일 목록</h1>
                    <Todohead />
                    <Todobody />
                </TodoProvider>
            </Item>
        </Contain>
    );
}

const Contain = styled.div`
    height: 100vh;
    background-color: #01579b;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Item = styled.div`
    padding: 20px;
    background-color: #ffffff;
`;

export default Todo;
