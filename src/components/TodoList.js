import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const TodoItem = ({ id, name, isComplete }) => (
  <li>
    <input type="checkbox" defaultChecked={isComplete} />
    {name}
  </li>
);
TodoItem.propTypes = {
  name: PropTypes.string,
  isComplete: PropTypes.bool
};
const TodoList = props => (
  <div className="Todo-List">
    <ul>
      {props.todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  </div>
);
const connectedApp = connect(state => ({ todos: state.todos }))(TodoList);
export default connectedApp;
