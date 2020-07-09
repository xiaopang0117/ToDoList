import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        const { content } = this.props
        return (
            < div onClick={this.handleClick} > {content}</div>
        )
    }

    handleClick() {
        const { delItem, index } = this.props
        delItem(index)
    }
}

TodoItem.propTypes = {
    content: PropTypes.string,
    delItem: PropTypes.func.isRequired,
    index: PropTypes.number
}

export default TodoItem