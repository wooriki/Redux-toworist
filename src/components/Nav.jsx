import React from "react";
import styled from "styled-components";

// style component 전체 및 각 태그들을 스타일링
const Content = styled.div`
    font-weight: 900;
    display: flex;
    margin: 30px 0 -36px 0;
`;

const Title = styled.div`
    font-size: 18px;
    width: 50%;
    text-align: left;
    margin-left: 20px;
`;
const Sub = styled.div`
    font-size: 18px;
    width: 50%;
    text-align: right;
    margin-right: 20px;
`;

//최상단의 여백 및 보조 문구 삽입
function Nav() {
    return (
        <Content>
            <Title>toWORIst</Title>
            <Sub>React</Sub>
        </Content>
    );
}

export default Nav;
