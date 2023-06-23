import React from "react";
import { useSelector } from "react-redux";
import List from "./List";
import styled from "styled-components";

const Body = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

function AllDone() {
    const todos = useSelector((state) => state.todos);

    return (
        <div>
            <h2>Finally Done !! 🎉🎉</h2>
            <Body>
                {todos
                    .filter((todos) => todos.isDone)
                    .map((item) => (
                        <List key={item.id} item={item} />
                    ))}
            </Body>
        </div>
    );
}

export default AllDone;
