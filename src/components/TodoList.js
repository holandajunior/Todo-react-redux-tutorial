import React from 'react';
import TodoItem from './TodoItem';

//Boost rendering this components
//https://facebook.github.io/react/docs/pure-render-mixin.html
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  getItems() {
    if(this.props.todos) {
      return this.props.todos.filter( item =>
        this.props.filter === 'all' || item.get('status') === this.props.filter
      );
    }
  }

  isCompleted(item) {
    return item.get('status') === 'completed';
  }

  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.getItems().map(item =>
            <TodoItem key={item.get('text')}
                      text={item.get('text')}
                      isCompleted={this.isCompleted(item)}
                      isEditing={item.get('editing')}
                      toggleComplete={this.props.toggleComplete}
                      deleteItem={this.props.deleteItem}
                      editItem={this.props.editItem}/>
          )}
        </ul>
      </section>
    );
  }
}
