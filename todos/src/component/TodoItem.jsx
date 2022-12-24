import { useTodoDispatch } from "../context/todos";
import { BsTrash } from "react-icons/bs";
import styled, { css } from "styled-components";
import { AiOutlineCheckCircle, AiFillCheckCircle } from "react-icons/ai";

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
            <Checkbox onClick={onToggle}>
                {done ? <AiFillCheckCircle /> : <AiOutlineCheckCircle />}
            </Checkbox>
            <Textbox done={done}>{text}</Textbox>
            <Trashbox onClick={onRemove} />
        </div>
    );
}

const Checkbox = styled.span`
    cursor: pointer;
    &:hover {
        background-color: lightgray;
    }
`;

const Textbox = styled.span`
    ${({ done }) =>
        done &&
        css`
            text-decoration: line-through;
        `}
`;

const Trashbox = styled(BsTrash)`
    cursor: pointer;
    &:hover {
        background-color: lightgray;
    }
`;

export default TodoItem;
