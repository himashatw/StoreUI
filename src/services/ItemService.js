import axios from 'axios';

const item_api_base_uri = "http://localhost:8080/api/item";

class ItemService{

    getItems(){

        return axios.get(item_api_base_uri+'/all');
    }

    deleteItem(itemId){
        return axios.delete(item_api_base_uri+'/delete/'+itemId);
    }

    addItem(item){
        return axios.post(item_api_base_uri+'/add/',item);
    }

    getItemById(itemId){
        return axios.get(item_api_base_uri+'/'+itemId);
    }

    updateItem(itemUpdateResource,itemId){
         return axios.put(item_api_base_uri+'/'+itemId,itemUpdateResource);
    }

}

export default new ItemService();