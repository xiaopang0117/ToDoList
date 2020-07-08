import React, { Component, Fragment } from "react"
import './style.css'
import TodoItem from './TodoItem'

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
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
            onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <div>
                <TodoItem
                  // 传递给子组件属性
                  content={item}
                  index={index}
                  // 传递给字符串方法
                  delItem={this.handleItemDelte.bind(this)}
                />
                {/* <li
                key={index}
                onClick={this.handleItemDelte.bind(this, index)}
                dangerouslySetInnerHTML={{ __html: item }}>
                </li> */}
              </div>
            )
          })}
        </ul>
      </Fragment >
    )
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleItemDelte(index) {
    // immutable
    // state 不允许我们做任何的改变
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default TodoList;
