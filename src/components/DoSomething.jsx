import React from "react";
import { useSelector } from "react-redux";
import List from "./List";
import styled from "styled-components";

// style component 전체 및 각 태그들을 스타일링
const Body = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;
const Title = styled.h2`
    margin: 20px 0 0 16px;
`;

function DoSomething() {
    // useSelector로 store에서 전역 state 가져오기
    // state. xxx 이거 잘 불러와야함 *오류발생
    const todos = useSelector((state) => state.todos);

    // 불러온 todos를 filter method로 isDone 아닌 애들만 남겨준다. (반대값)
    // 그 걸러진 요소들을 map으로 하나하나 돌려줌
    return (
        <div>
            <Title>You must do it !🔥</Title>
            <Body>
                {todos
                    .filter((todos) => !todos.isDone)
                    .map((item) => (
                        <List key={item.id} item={item} />
                    ))}
            </Body>
        </div>
    );
}

export default DoSomething;
