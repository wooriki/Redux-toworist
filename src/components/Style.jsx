import { createGlobalStyle } from "styled-components";

// style component
// 전체적으로 영향을 끼치게될 공통 스타일을 선언해준다. createGlobalStyle
const Style = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0 auto;
  }


`;

export default Style;
