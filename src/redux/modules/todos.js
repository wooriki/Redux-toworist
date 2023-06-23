import uuid from "react-uuid";

// 실패한 부분 //
// // // action value
// // const TOGGLE = "todosSet/TOGGLE";
// // const ADDON = "todosSet/ADDON";
// // const DELETEON = "todosSet/DELETEON";

// // // action creator : action value를 return 하는 함수
// // export const toggleTodo = (payload) => {
// //     return {
// //         type: TOGGLE,
// //         payload,
// //     };
// // };
// // export const addTodo = (payload) => {
// //     return {
// //         type: ADDON,
// //         payload,
// //     };
// // };
// // export const deleteTodo = (payload) => {
// //     return {
// //         type: DELETEON,
// //         payload,
// //     };
// // };

// // //리듀서 : 함수(state에 변화를 일으키는 함수)
// // // - stae를 action의 type에 따라 변경하는 함수

// // // input : state, action을 받는다
// // // action 객체라는 것은 action type을 payload만큼 처리하는 것이다
// // // ex : payload가 3이다 . 3만큼 plus
// // const todosSet = (state = initialState, action) => {
// //     switch (action.type) {
// //         case ADDON:
// //             return [...state, action.payload];
// //         case TOGGLE:
// //             return state.map((todo) => {
// //                 if (todo.id === action.payload) {
// //                     return { ...todo, isDone: !todo.isDone };
// //                 }
// //                 return todo;
// //             });
// //         case DELETEON:
// //             return state.filter((todo) => {
// //                 return todo.id !== action.payload;
// //             });
// //         default:
// //             return state;
// //     }
// // };

// // export default todosSet;
const initialState = [
    {
        id: uuid(),
        title: "React 강의",
        content: "정리해서 분할 학습하기",
        isDone: false,
    },
    {
        id: uuid(),
        title: "Java Script 문제",
        content: "기본부터 순서대로",
        isDone: false,
    },
];

// * action value
const TOGGLE_ON = "todos/TOGGLE_ON";
const ADD_ON = "todos/ADD_ON";
const DELETE_ON = "todos/DELETE_ON";
//액션의 타입(type)을 정의한 상수
//이 액션 타입은 나중에 액션 생성자(action creator)에서 사용

//addTodo, toggleStatusTodo, deleteTodo는 액션을 생성하는 함수
// 각 함수는 액션 타입과 페이로드(payload)를 받아서 해당 액션 객체를 반환
export const toggles = (payload) => {
    return {
        type: TOGGLE_ON,
        payload,
    };
};
export const addTodo = (payload) => {
    return {
        type: ADD_ON,
        payload,
    };
};

export const delets = (payload) => {
    return {
        type: DELETE_ON,
        payload,
    };
};

// * 리듀서
//리듀서는 Action 등의 일거리를 직접 수행하는 놈
const todos = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_ON:
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, isDone: !todo.isDone };
                }
                return todo;
            });
        case ADD_ON:
            return [...state, action.payload];
        case DELETE_ON:
            return state.filter((todo) => {
                return todo.id !== action.payload;
            });
        default:
            return state;
    }
};

export default todos;
