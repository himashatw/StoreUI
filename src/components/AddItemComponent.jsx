import React, { Component } from 'react';
import ItemService from '../services/ItemService';

class AddItemComponent extends Component{
    constructor(props){
        super(props);
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
                                {/* {
                                    this.getTitle()
                                } */}
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Item Id: </label>
                                            <input placeholder="Item Id" name="itemId" className="form-control" 
                                                />
                                        </div>
                                        <div className = "form-group">
                                            <label> Item Name: </label>
                                            <input placeholder="Item Name" name="itemName" className="form-control" 
                                                />
                                        </div>
                                        <div className = "form-group">
                                            <label> Quantity: </label>
                                            <input placeholder="Quantity" name="qty" className="form-control" 
                                                />
                                        </div>
                                        <div className = "form-group">
                                            <label> Item Price: </label>
                                            <input placeholder="Item Price" name="itemPrice" className="form-control" 
                                                />
                                        </div>
                                        <br></br>
                                        <button className="btn btn-success">Save</button>
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