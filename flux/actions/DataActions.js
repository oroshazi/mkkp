import axios        from 'axios';
import alt          from '../alt/alt';

class DataActions {

    constructor() {
      const appUrl = 'http://juliajogacom.ipage.com/'; // Wordpress installation url
      // const appUrl = 'http://local.wordpress.test/';

        this.pagesEndPoint = `${appUrl}/wp-json/wp/v2/pages?_embed&per_page=100`; // Endpoint for getting Wordpress Pages
        this.postsEndPoint = `${appUrl}/wp-json/wp/v2/posts?_embed&per_page=100`; // Endpoint for getting Wordpress Posts
        this.postsfeaturedImageEndPoint = `${appUrl}/wp-json/wp/v2/posts?_embed`; // Endpoint for getting wp posts featured Image

    }

    // Method for getting data from the provided end point url
    api(endPoint) {
        return new Promise((resolve, reject) => {
            axios.get(endPoint).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    // Method for getting Pages data
    getPages(cb){
        this.api(this.pagesEndPoint).then((response)=>{
            this.getPosts(response, cb)
        });
        return true;
    }

    // Method for getting Posts data
    getPosts(pages, cb){
        this.api(this.postsEndPoint).then((response)=>{
            const posts     = response
            const payload   = { pages, posts };

            this.getSuccess(payload); // Pass returned data to the store
            cb(payload); // This callback will be used for dynamic rout building
        });
        return true;
    }

    // This returnes an object with Pages and Posts data together
    // The Alt Store will listen for this method to fire and will store the returned data
    getSuccess(payload){
        return payload;
    }
}

export default alt.createActions(DataActions);
