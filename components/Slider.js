import React, { Component }     from 'react';
import {  Carousel,
          CarouselItem,
          CarouselControl,
          CarouselIndicators,
          CarouselCaption}      from 'reactstrap';
import DataStore                from '../flux/stores/DataStore'

const items = [
  {
    id: 0,
    altText: 'alszöveg',
    caption: 'felszöveg'
  },
  {
    id: 1,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    id: 2,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const style = {
  'more-link':{
    display:'none'
  }
}

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);


  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    //####################################################
    var allPosts = DataStore.getAllPosts();

    //Last three posts
    var post = new Array (
                DataStore.getLastThreePosts()[0],
                DataStore.getLastThreePosts()[1],
                DataStore.getLastThreePosts()[2]
              );
    // featuredmedia of last three posts
  /*  var fimg = new Array (
                post[0]._links["wp:featuredmedia"][0].href,
                post[1]._links["wp:featuredmedia"][0].href,
                post[2]._links["wp:featuredmedia"][0].href
              ); */

    // getLastThreePosts[].title/excerpt/featured.rendered
    //vagy: allPosts = allPosts.sortBy(allPosts, [function(post) { return post.date_order; }]);
    console.log('getAllposts: slider: ', DataStore.getAllPosts());
    console.log('allPosts order:   ', allPosts);
    console.log('post:    :', post);
    console.log('excerpt:   ',  post[0]._links["wp:featuredmedia"][0].href);
    console.log('embedded request:  ', post[0]);
    var kep = post[0]._links["wp:featuredmedia"][0].href.toString();
    //####################################################   http://local.wordpress.test/index.php/wp-json/wp/v2/media/47



    //TODO: add featured img to slider
    const slides = items.map((item) => {
      return (

        <CarouselItem

          className='d-block img-fluid'
          tag="div"
          key={item.id}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <style>
            {
              `.more-link {
                  display:none;
                }`
            }
          </style>

          <CarouselCaption

            className="text-danger"
            captionText={<div style={style} dangerouslySetInnerHTML={{__html: post[item.id].excerpt.rendered}}></div> }
            captionHeader={<div dangerouslySetInnerHTML={{__html: post[item.id].title.rendered}}></div>}
           >

           </CarouselCaption>
           <img src={'http://local.wordpress.test/wp-content/uploads/2018/01/amazing-animal-beautiful-beautifull.jpg'} alt={'some text'} />

        </CarouselItem>
      );
    });

    return (
      <div>
        <style>
          {
            `.custom-tag {
                max-width: 100%;
                height: 500px;
                background: black;
              }`
          }
        </style>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}
