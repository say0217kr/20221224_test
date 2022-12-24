import { useRef } from "react";
import { useTodoDispatch } from "../context/todos";
import { useInputs } from "../hook/useInput";
import { BsArrowReturnLeft } from "react-icons/bs";
import styled from "styled-components";

function Todoinput() {
    const [inputs, onChange, onReset] = useInputs({
        text: "",
    });
    const { text } = inputs;
    const dispatch = useTodoDispatch();
    const nextId = useRef(4);
    const onSubmit = () => {
        dispatch({
            type: "CREATE_TODO",
            id: nextId.current,
            text,
        });
        onReset();
        nextId.current++;
    };
    return (
        <Inputbox>
            <input type="text" onChange={onChange} name="text" value={text} />
            <Submitbox onClick={onSubmit} />
        </Inputbox>
    );
}

const Inputbox = styled.div``;

const Submitbox = styled(BsArrowReturnLeft)`
    cursor: pointer;
    &:hover {
        background-color: lightgray;
    }
`;

export default Todoinput;
