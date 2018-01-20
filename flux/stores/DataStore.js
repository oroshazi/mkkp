import alt          from '../alt/alt';
import DataActions  from '../actions/DataActions';

class DataStore {
    constructor() {
        this.data = {};

        this.bindListeners({
            // Listen to the getSuccess() in DataActions.js
            handleSuccess: DataActions.GET_SUCCESS
        });

        this.exportPublicMethods({
            getAll:             this.getAll,
            getAllPages:        this.getAllPages,
            getAllPosts:        this.getAllPosts,
            getPageBySlug:      this.getPageBySlug,
            getLastThreePosts:  this.getLastThreePosts,
            getPostBySlug:      this.getPostBySlug

        });
    }

    // Store data returned by getSuccess() in DataActions.js
    handleSuccess(data) {
        this.setState({ data });
    }

    // Returns all pages and posts
    getAll() {
        return this.getState().data;
    }

    // Returns all Pages
    getAllPages() {
        return this.getState().data.pages;
    }

    // Returns all Posts
    getAllPosts() {
        return this.getState().data.posts;
    }

    // Returns a Page by provided slug
    getPageBySlug(slug){
        const pages = this.getState().data.pages;
        return pages[Object.keys(pages).find((page, i) => {
            return pages[page].slug === slug;
        })] || {};
    }

    // TODO: Returns last three posts ordered by date
    getLastThreePosts(){
      const posts = this.getState().data.posts;
      return posts
    }


    getPostBySlug(slug){
        const posts = this.getState().data.posts;
        return posts[Object.keys(posts).find((post, i) => {
            return posts[post].slug === slug;
        })] || {};
    }

}

export default alt.createStore(DataStore, 'DataStore');
