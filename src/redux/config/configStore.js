// 중앙 데이터 관리소(store)를 설정하는 곳
import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";

// 총대장 Reducer를 선언해준다 그 안에는 작성 해놓은 todos를 불러와준다
// 필요한 module 작성하고 여기서 불러주면 된다.
const rootReducer = combineReducers({
    todos,
});
const store = createStore(rootReducer);

export default store;
