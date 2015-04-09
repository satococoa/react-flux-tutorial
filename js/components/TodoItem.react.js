var React = require('react');
var TodoActions = require('../actions/TodoActions');
var TodoTextInput = require('./TodoTextInput.react');

var TodoItem = React.createClass({
  propTypes: {
    todo: React.PropTypes.object.isRequired
  },

  render: function() {
    var todo = this.props.todo;

    if (todo.complete) {
      text = <s>{todo.text}</s>;
    } else {
      text = todo.text;
    }

    return (
      <li
        key={todo.id}>
        <label onClick={this._onLabelClick}>
          {text}
        </label>
        <button className="destroy" onClick={this._onDestroyClick}>DEL</button>
      </li>
    );
  },

  _onDestroyClick: function() {
    TodoActions.destroy(this.props.todo.id);
  },

  _onLabelClick: function() {
    TodoActions.finish(this.props.todo.id);
  },

});

module.exports = TodoItem;
