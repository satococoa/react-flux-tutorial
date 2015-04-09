var React = require('react');

var Footer = React.createClass({
  render: function() {
    var todoCount = Object.keys(this.props.allTodos).length;

    return (
      <div>COUNT: {todoCount}</div>
    );
  }
});

module.exports = Footer;
