import { useTodoDispatch } from "../context/todos";
import { BsTrash } from "react-icons/bs";
import styled, { css } from "styled-components";

function TodoItem({ todo }) {
    const { id, text, done } = todo;
    const dispatch = useTodoDispatch();
    const onToggle = () => {
        dispatch({ type: "TOGGLE_TODO", id });
    };
    const onRemove = () => {
        dispatch({
            type: "REMOVE_TODO",
            id,
        });
    };
    return (
        <div>
            <Textbox onClick={onToggle} done={done}>
                {text}
            </Textbox>
            <BsTrash onClick={onRemove} />
        </div>
    );
}

const Textbox = styled.span`
    ${({ done }) =>
        done &&
        css`
            text-decoration: line-through;
        `}
`;

export default TodoItem;
