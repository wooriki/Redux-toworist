import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import uuid from "react-uuid";
import styled from "styled-components";

const Content = styled.div`
    height: 90px;
    align-items: center;
    margin-top: 40px;
    padding: 20px;
    background-color: #4f94d4;
    border-radius: 20px;
`;

const Formtag = styled.form`
    width: 100%;
    display: flex;
    text-align: center;
    padding: 5px;
    justify-content: center;
`;
const Div = styled.div`
    margin: 0;
    width: 40%;
    display: flex;
`;

const Title = styled.h2`
    color: white;
    font-size: 20px;
    width: 40px;
    margin: 5px 0 0 0;
`;

const Input = styled.input`
    width: 300px;
    height: 40px;
    margin: 0 20px;
    padding-left: 10px;
    font-size: 20px;
    border: none;
    border-radius: 10px;
`;

const Btn = styled.button`
    padding: 4px 20px 4px 20px;
    border: none;
    border-radius: 12px;
    font-weight: 900;
    font-size: 18px;
    background-color: #135e96;
    color: white;
    cursor: pointer;
`;

function FormInput() {
    // useDispatch로 액션 객체 리듀서로 보내기
    const dispatch = useDispatch();

    // useState 훅을 사용하여 title과 content라는 두 개의 상태 변수를 정의
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const titleInput = (e) => setTitle(e.target.value);
    const contentInput = (e) => setContent(e.target.value);

    const registerBtn = (e) => {
        e.preventDefault();
        if (title === "" || content === "") {
            alert("공란을 채워주세요.");
            return;
        }
        const newTo = {
            id: uuid(),
            title,
            content,
            isDone: false,
        };

        dispatch(addTodo(newTo));
        setTitle("");
        setContent("");
    };

    return (
        <Content>
            <Formtag>
                <Div>
                    <Title>제목</Title>
                    <Input
                        type="text"
                        placeholder="제목을 입력해주세요"
                        value={title}
                        onChange={titleInput}
                    />
                </Div>
                <Div>
                    <Title>내용</Title>
                    <Input
                        type="text"
                        placeholder="내용을 입력해주세요"
                        value={content}
                        onChange={contentInput}
                    />
                </Div>
                <Btn onClick={registerBtn}>등록하기</Btn>
            </Formtag>
        </Content>
    );
}

export default FormInput;
