import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Style from "./Style";
import styled from "styled-components";

// style component 전체 및 각 태그들을 스타일링
const Body = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Div = styled.section`
    width: 850px;
    height: 250px;
    padding: 40px;
    border: 5px double #3582c4;
    border-radius: 20px;
    background-color: #f0f0f1;

    box-shadow: 30px 30px 100px 2px gray;
`;

const Inner = styled.div`
    font-weight: 600;
    color: #2271b1;
`;
const Title = styled.h1`
    width: 760px;
    height: 48px;
    overflow: hidden;
    font-size: 38px;
    margin: 10px 0 0 0;
`;

const Content = styled.p`
    margin: 20px 0 0 10px;
    width: 550px;
    height: 24px;
    overflow: hidden;
`;
const Btn = styled.button`
    float: right;
    margin-top: -20px;
    font-size: 20px;
    color: white;
    font-weight: 600;
    background-color: #2271b1;
    padding: 6px 24px 6px 24px;
    border: 3px solid #2271b1;
    border-radius: 10px;
    cursor: pointer;
`;

function Detail() {
    // useSelector로 store에서 전역 state 가져오기
    // state. xxx 이거 잘 불러와야함 *오류발생
    const todos = useSelector((state) => state.todos);

    const params = useParams();
    // URL를 활용할 수 있도록 useParams 변수로 불러옴

    const navigate = useNavigate();

    const foundData = todos.find((item) => item.id === params.id);
    //해당 item의 id와 url의 id 찾아서 렌더링해줄거야
    return (
        <>
            <Style />
            <Body>
                <Div>
                    <Inner>
                        <span>toDo ID : {foundData.id}</span>
                    </Inner>
                    <div>
                        <Title>{foundData.title}</Title>
                        <Content>{foundData.content}</Content>
                    </div>
                    <Btn onClick={() => navigate("/")}>Home</Btn>
                </Div>
            </Body>
        </>
    );
}

export default Detail;
