import React, {useState} from 'react';
import { connect } from 'react-redux';

function Home({todos}) {

  const [text, setText] = useState('');
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>add</button>
      </form>
      <ul>
        {JSON.stringify(todos)}
      </ul>
    </>
  )
}

function mapStateToProps(state, ownProps) {
  return {todos: state};
}

export default connect(mapStateToProps) (Home);