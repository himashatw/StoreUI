import React, { Component } from 'react';
import ItemService from '../Services/ItemService';

class AddItemComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            itemId : '',
            itemName : '',
            qty : '',
            itemPrice : ''
        }
        this.changeItemIdHandler = this.changeItemIdHandler.bind(this);
        this.changeItemNameHandler = this.changeItemNameHandler.bind(this);
        this.changeItemQtyHandler = this.changeItemQtyHandler.bind(this);
        this.changeItemPriceHandler = this.changeItemPriceHandler.bind(this);
        this.addItems = this.addItems.bind(this);
    }

    addItems = (e)=>{
        e.preventDefault();
        const item = {itemId: this.state.itemId, itemName: this.state.itemName, qty: this.state.qty, itemPrice:this.state.itemPrice};
        console.log('Items => ' + JSON.stringify(item));
        ItemService.addItem(item).then(req =>{
             this.props.history.push('/items');
         });
    }

    changeItemIdHandler = (event) =>{
        this.setState({itemId:event.target.value});
    }

    
    changeItemNameHandler = (event) =>{
        this.setState({itemName:event.target.value});
    }

    
    changeItemQtyHandler = (event) =>{
        this.setState({qty:event.target.value});
    }

    
    changeItemPriceHandler = (event) =>{
        this.setState({itemPrice:event.target.value});
    }

    cancel(){
        this.props.history.push('/items');
    }

    render(){
        return(
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className = "text-center">Add Item</h3>
                                {/* {
                                    this.getTitle()
                                } */}
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Item Id: </label>
                                            <input placeholder="Item Id" name="itemId" className="form-control" 
                                             value={this.state.itemId} onChange={this.changeItemIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Item Name: </label>
                                            <input placeholder="Item Name" name="itemName" className="form-control" 
                                            value={this.state.itemName} onChange={this.changeItemNameHandler}/>
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
                                        <button className="btn btn-success" onClick={this.addItems}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
            
        )
    }
}

export default AddItemComponent;