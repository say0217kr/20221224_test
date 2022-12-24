import Todolist from "./Todolist";
import Todoinput from "./Todoinput";
import styled from "styled-components";

function Todobody() {
    return (
        <Todobodybox>
            <Todolist />
            <Todoinput />
        </Todobodybox>
    );
}

const Todobodybox = styled.div``;

export default Todobody;
