import React, { useState } from 'react';

// 컴포넌트 최적화를 위하여 React.memo를 사용합니다
const TodoItem = React.memo(function TodoItem({ todo, onToggle }) {
    //래핑된 컴포넌트의 props가 변경되었을 때만 다시 렌더링되도록 하기 위해 사용됌.
  return (
    <li
      style={{ textDecoration: todo.done ? 'line-through' : 'none' }} 
      //만약 todo.done이 true라면, 꾸밈선으로 텍스트를 가로지르는 스타일(line-through)을 적용하고, todo.done이 false라면 꾸밈선 스타일을 적용하지 않는(none) 것.
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
});

// 컴포넌트 최적화를 위하여 React.memo를 사용합니다
const TodoList = React.memo(function TodoList({ todos, onToggle }) {
    return (
      <ul>
        {todos.map(todo => (
            //todos 배열의 각 요소에 대해 TodoItem 컴포넌트를 렌더링하고,
            // key, todo, onToggle props를 전달하는 것
          <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
    
        ))}
      </ul>
    );
  });

  function Todos({ todos, onCreate, onToggle }) {
    // 리덕스를 사용한다고 해서 모든 상태를 리덕스에서 관리해야하는 것은 아닙니다.
    const [text, setText] = useState('');
    const onChange = e => setText(e.target.value);
    const onSubmit = e => {
      e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
      onCreate(text);
      setText(''); // 인풋 초기화
    };
  
    return (
        <div>
          <form onSubmit={onSubmit}>
            <input
              value={text}
              placeholder="할 일을 입력하세요.."
              onChange={onChange}
            />
            <button type="submit">등록</button>
          </form>
          <TodoList todos={todos} onToggle={onToggle} />
        </div>
      );
    }
    
    export default Todos;