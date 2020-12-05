# vanilla redux

### redux가 가장 잘하는 것은?

<b>데이터(state) 관리</b>

- store : 데이터 저장고
- reducer : 데이터를 변경하는 유일한 함수
- action : reducer안에서 수행할 행위를 정의한 객체

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
