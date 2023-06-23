import React from "react";
import { useSelector } from "react-redux";
import List from "./List";
import styled from "styled-components";

const Body = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;
const Title = styled.h2`
    margin: 20px 0 0 16px;
`;

function AllDone() {
    const todos = useSelector((state) => state.todos);

    return (
        <div>
            <Title>Finally Done !! 🎉🎉</Title>
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
