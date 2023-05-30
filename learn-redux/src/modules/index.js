import { combineReducers } from 'redux';
import counter  from './counter';
import todos from './todos';

const rootReducer = combineReducers(
    {
        counter,
        todos
    }
);

export default rootReducer;
//counter과 todos에서 나온 리듀서들을 합친 작업이다.
// 이를 "루트리듀서" 라고한다