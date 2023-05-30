import { createStore }  from 'redux';

// 리덕스에서 관리 할 상태 정의
const init = { 
    counter : 0 , 
    text: '',
    list: []

};

//액션 타입 정의
//액셕 타입은 주로 대문자로 작성한다.
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

//===================================================
//액션 생성함수 정의 
//액션 생성함수는 주로 camelCase로 작성한다

function increase() { 
    return {
        type : INCREASE //액션 객체에는 type값이 필수이다.
    }
}

//위와 똑같은 형태이다. 화살표 함수가 더 간결하기에 추천한다.
const decrease = () => ({ 
    type : DECREASE
});

const changeText = text => ({ 
    type : CHANGE_TEXT,
    text
});

const addToList = item => ({ 
    type : ADD_TO_LIST,
    item
});
//===================================================

//리듀서 만들기
//위 액션 생성함수들을 통해 만들어친 객체들을 참조하여, 새로운 상태를 만드는 함수를 만들어보자
// 주의 : 리듀서에서는 불변성을 꼭 지켜줘야한다.

function reducer(state = init , action) { 
    //stat의 초깃값을 init로 지정한다.
    switch(action.type) { 
        case INCREASE : 
        return { 
            ...state,
            counter: state.counter + 1 
        };
        case DECREASE:
            return { 
                ...state,
                counter: state.counter -1
            };
        case CHANGE_TEXT:
            return{
                ...state,
                text: action.text
            };
        case ADD_TO_LIST: 
            return { 
                ...state,
                list : state.list.concat(action.item)
            };
        default: 
            return state;   
    }
}

//================================================
//스토어 만들기 
//리덕스에서는 한 애플리케이션당 하나의 스토어를 만들게 됩니다
const store = createStore(reducer);

console.log(store.getState()); // 현재 store 안에 들어있는 상태를 조회합니다.

// 스토어안에 들어있는 상태가 바뀔 때 마다 호출되는 listener 함수

const listener = () => { 
    const state = store.getState();
    console.log(state);
}

const unsubscribe = store.subscribe(listener);
// 구독을 해제하고 싶을 때는 unsubscribe() 를 호출하면 됩니다.
//subscribe 함수에 특정 함수를 전달해주면, 액션이 디스패치 되었을 때 마다 전달해준 함수가 호출

// 액션들을 디스패치 해봅시다.
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({ id: 1, text: '와우' }));
//디스패치는 액션을 발생 시키는 것 