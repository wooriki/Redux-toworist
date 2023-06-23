import React from "react";
import Nav from "./Nav";
import FormInput from "./FormInput";
import DoSomething from "./DoSomething";
import AllDone from "./AllDone";
import Style from "./Style";
import styled from "styled-components";
// 컴포넌트를 제대로 불러와준다, 스팰링 & upperCase 등 주의해서 통일화 작업해야할듯
// 수정 몇 번만 하다보면 많이 엉킴

// style component 전체 및 각 태그들을 스타일링
const Div = styled.div`
    width: 1200px;
    min-width: 800px;
    margin: 0 auto;
`;

// 메인이될 Home 파일 안에 계획한 위치를 잡아준다.
// return 문 안에는 빈 태그로 한 번 감싸줘야한다.
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
