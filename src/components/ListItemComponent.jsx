import React, { Component } from 'react';
import ItemService from '../services/ItemService';

class ListItemComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            items:[]
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    deleteItem(id){
        ItemService.deleteItem(id).then(res=>{
            this.setState({
                items:this.state.items.filter(item => item.itemId !== id)
            })
        })
    }

    componentDidMount(){
        ItemService.getItems().then((response)=>{
            this.setState({items:response.data})
        })
    }

    addItem(){
        this.props.history.push('/additem');
    }

    render(){
       return (
        <div>
            <h2 className="text-center">Item Details</h2>
            <div className="col-2">
                <button className="btn btn-primary" onClick ={this.addItem}>Add Item</button>
            </div>
            <br></br>
            <div className="row"> 
            <table className ="table table-striped table-bordered">
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
                                <td>
                                    <button className="btn btn-info">Update</button>
                                    <button style={{marginLeft: "10px"}} onClick={ () => this.deleteItem(items.itemId)} className="btn btn-danger">Delete</button>
                                    
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
        </div>
       )
           
    }

}

export default ListItemComponent;