import React from "react";
import Nav from "./Nav";
import FormInput from "./FormInput";
import DoSomething from "./DoSomething";
import AllDone from "./AllDone";
import Style from "./Style";
import styled from "styled-components";

const Div = styled.div`
    width: 1200px;
    min-width: 800px;
    margin: 0 auto;
`;

function Home() {
    return (
        <>
            <Style />
            <Div>
                <Nav />
                <FormInput />
                <DoSomething />
                <AllDone />
            </Div>
        </>
    );
}

export default Home;
