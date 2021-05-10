import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ItemService from '../../services/ItemService';

class UpdateItemComponent extends Component{
    constructor(props){
        super(props);

        this.state ={
            itemId:this.props.match.params.id,
            itemName : '',
            itemCatagory : '',
            qty : '',
            itemPrice : ''
        }
        // this.changeItemIdHandler = this.changeItemIdHandler.bind(this);
        this.changeItemNameHandler = this.changeItemNameHandler.bind(this);
        this.changeItemCatagoryHandler = this.changeItemCatagoryHandler.bind(this);
        this.changeItemQtyHandler = this.changeItemQtyHandler.bind(this);
        this.changeItemPriceHandler = this.changeItemPriceHandler.bind(this);
        this.updateItems = this.updateItems.bind(this);
    }

    componentDidMount(){
        ItemService.getItemById(this.state.itemId).then( (res) =>{
            let item = res.data;
            this.setState({
                itemName: item.itemName,
                itemCatagory: item.itemCatagory,
                qty : item.qty,
                itemPrice : item.itemPrice
            });
        });
    }

    updateItems = (e)=>{
        e.preventDefault();
        const item = {
            itemName: this.state.itemName,
            itemCatagory: this.state.itemCatagory,
            qty: this.state.qty,
            itemPrice:this.state.itemPrice
        };
        console.log('Items => ' + JSON.stringify(item));
        console.log('ItemId => ' + JSON.stringify(this.state.itemId));
        ItemService.updateItem(item, this.state.itemId).then( res => {
            this.props.history.push('/items');
        });
        
    }

    changeItemNameHandler = (event) =>{
        this.setState({itemName:event.target.value});
    }

    changeItemCatagoryHandler = (event) =>{
        this.setState({itemCatagory:event.target.value});
    }
    
    changeItemQtyHandler = (event) =>{
        this.setState({qty:event.target.value});
    }

    
    changeItemPriceHandler = (event) =>{
        this.setState({itemPrice:event.target.value});
    }

    
    render(){
        return(
            <div>
                 <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className = "text-center">Update Item</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Item Name: </label>
                                            <input placeholder="Item Name" name="itemName" className="form-control" 
                                            value={this.state.itemName} onChange={this.changeItemNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Item Category: </label>
                                            <input placeholder="Item Category" name="itemCatagory" className="form-control" 
                                             value={this.state.itemCatagory} onChange={this.changeItemCatagoryHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Quantity: </label>
                                            <input placeholder="Quantity" name="qty" className="form-control" 
                                            value={this.state.qty} onChange={this.changeItemQtyHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Item Price: </label>
                                            <input placeholder="Item Price" name="itemPrice" className="form-control" 
                                            value={this.state.itemPrice} onChange={this.changeItemPriceHandler} />
                                        </div>
                                        <br></br>
                                        <button className="btn btn-success" onClick={this.updateItems}>Save</button>
                                        <Link to="/items">
                                            <button className="btn btn-danger"  style={{marginLeft: "10px"}}>Cancel</button>
                                        </Link>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateItemComponent;