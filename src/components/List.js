import React, { Component } from 'react';
import ListItems from './ListItems';
class List extends Component {

    render() {
        const {todo, onDelete, onEdit, count} = this.props;
        return (
            <>
                <ul>{
                    todo.map((item, index) =>{
                        return <ListItems 
                        item = {item.todo}
                        key = {index}
                        handleDelete ={() =>{onDelete(index)}}
                        handleEdit ={onEdit}
                        id={index}
                        />
                    })
                }
            </ul>
            <h2>You have {count} things todo</h2>
          </>
        ); 
    }
}
export default List;