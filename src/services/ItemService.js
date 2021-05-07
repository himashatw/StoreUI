import axios from 'axios';

const item_api_base_uri = "http://localhost:8080/api/item/all";

class ItemService{

    getItems(){

        return axios.get(item_api_base_uri);
    }
}

export default new ItemService();