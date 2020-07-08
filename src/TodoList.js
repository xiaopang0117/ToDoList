import React, { Component, Fragment } from "react"
import TodoItem from './TodoItem'
import './style.css'

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelte = this.handleItemDelte.bind(this)
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="intertArea">输入内容</label>
          {/* 下面是一个input框 */}
          <input
            id="intertArea"
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment >
    )
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <div key={index}>
          <TodoItem
            // 传递给子组件属性
            content={item}
            index={index}
            // 传递给字符串方法
            delItem={this.handleItemDelte}
          />
          {/* <li
                key={index}
                onClick={this.handleItemDelte.bind(this, index)}
                dangerouslySetInnerHTML={{ __html: item }}>
                </li> */}
        </div>
      )
    })
  }

  handleInputChange(e) {
    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
    // this.setState({
    //   inputValue: e.target.value
    // })
  }
  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }
  handleItemDelte(index) {
    // immutable
    // state 不允许我们做任何的改变
    // const list = [...this.state.list]
    // list.splice(index, 1)
    // this.setState({
    //   list: list
    // })
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return { list }
    })
  }
}

export default TodoList;
