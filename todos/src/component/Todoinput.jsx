import { useRef } from "react";
import { useTodoDispatch } from "../context/todos";
import { useInputs } from "../hook/useInput";
import { BsArrowReturnLeft } from "react-icons/bs";

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
        <div>
            <input type="text" onChange={onChange} name="text" value={text} />
            <BsArrowReturnLeft onClick={onSubmit} />
        </div>
    );
}

export default Todoinput;
