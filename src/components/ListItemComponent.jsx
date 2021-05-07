//import { response } from 'express';
import React, { Component } from 'react';
import ItemService from '../services/ItemService';

class ListItemComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            items:[]
        }
    }

    componentDidMount(){
        ItemService.getItems().then((response)=>{
            this.setState({items:response.data})
        })
    }

    render(){
       return (
        <div>
            <h2 className='text-center'>Item Details</h2>
            <table className = 'table table-bordered'>
                <thead>
                    <tr>
                            <td>Item Id</td>
                            <td>Item Name</td>
                            <td>Item Quantity</td>
                            <td>Item Price</td>
                            <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.items.map(
                            items =>
                            <tr key = {items.itemId}>
                                <td>{items.itemId}</td>
                                <td>{items.itemName}</td>
                                <td>{items.qty}</td>
                                <td>{items.itemPrice}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
       )
           
    }

}

export default ListItemComponent