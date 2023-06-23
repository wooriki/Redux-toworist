import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Detail from "../components/Detail";

//전역적으로 Router로 관리해준다
//BrowserRouter로 감싸주고 내부에 작성해둔 component를
// Route로 각 페이지를 입력해준다.
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path=":id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
