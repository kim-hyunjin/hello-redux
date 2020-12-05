# vanilla redux

### redux가 가장 잘하는 것은?

<b>데이터(state) 관리</b>

- store : 데이터 저장고
- reducer : 데이터를 변경하는 유일한 함수
- action : reducer안에서 수행할 행위를 정의한 객체. action은 반드시 plain Object여야하며, type을 가지고 있어야 함.

#### reducer의 파라미터

```
const reducer = (data, action) => {
  //do modify data
  return data;
}
```

#### store의 내장함수

- dispatch : 파라미터로 넘겨 받은 action을 가지고 reducer 실행
- getState : 현재 store에 저장된 데이터 리턴
- replaceReducer
- subscribe : 리스너 함수(store안의 데이터가 변경될 때마다 실행될 함수)를 등록
- Symbol

# IMPORTANT!

- reducer에서 직접 state에 변형을 주지 말것! 새 객체를 리턴해라!

```
DON'T
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return state.push(action.text);
    ...
  }
}
=================================================
DO
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, {text: action.text}];
    ...
  }
}
```

## react redux

store의 데이터가 변경될 때 리액트에서 리렌더링 하려면?

- react-redux의 connect 사용

### connect

컴포넌트와 리덕스 스토어를 연결시켜준다.

```
myfunction(state, ownProps) {
  // state는 리덕스에 들어있는 state
  // ownProps는 컴포넌트 자신의 props
  return {something: 'blahblah'} // 여기서 리던하는 값은 나 자신의 props로 추가됨
}

export default connect(myfunction) (MyComponent)
```
