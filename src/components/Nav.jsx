import React from "react";
import styled from "styled-components";

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
function Nav() {
    return (
        <Content>
            <Title>toWORIst</Title>
            <Sub>React</Sub>
        </Content>
    );
}

export default Nav;
