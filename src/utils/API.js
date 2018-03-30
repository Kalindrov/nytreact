import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const APIKEY = "9fa240ad4161445491b14eed92d7c864";

export default {
    search: function(query) {
        return axios.get(BASEURL + query + APIKEY);
    }
};