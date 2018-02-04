import React, { Component }     from 'react';
import { Carousel,
         CarouselItem,
         CarouselControl,
         CarouselIndicators,
         CarouselCaption}      from 'reactstrap';
import { Link }                 from 'react-router-dom';

import DataStore                from '../flux/stores/DataStore';

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

const txtStyle ={
  backgroundColor: 'black',
  color: 'white',
  opacity: '.7'
}

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
       activeIndex: 0,
       imgStyle : {
             minWidth: '100%',
             maxWidth: '100%',
             height: '500px',
             background: 'black',
             opacity: '0.4',
             filter: 'grayscale(0%)'
       }
    };
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

  handleMouseOver() {
    var ctag = this.refs.sliderimages;
  }

  render() {
    const { activeIndex } = this.state;
    var allPosts = DataStore.getAllPosts();
    //Last three posts
    var post = new Array (
                DataStore.getLastThreePosts()[0],
                DataStore.getLastThreePosts()[1],
                DataStore.getLastThreePosts()[2]
              );

    console.log('post: : :: : : ', post[0].slug);
    const slides = items.map((item) => {
      return (

        <CarouselItem

          className='d-block img-fluid '
          tag="div"
          key={item.id}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <Link to={'/posts/' + post[item.id].slug}>
          <style>
            {
              `.more-link {
                  display:none;
                }
                .boldtxt {
                  font-weight: 1000;
                }`
            }
          </style>
          <div className="custom-tag">
          <CarouselCaption
            className=" "
            captionText={<div className="boldtxt"  style = {txtStyle}
              dangerouslySetInnerHTML={{__html: post[item.id].excerpt.rendered}}>
              </div> }
            captionHeader={<div className="  boldtxt" style = {txtStyle}
              dangerouslySetInnerHTML={{__html: post[item.id].title.rendered}}>
              </div>}
           >

           </CarouselCaption>
            <div className='item'>
              <img className="" ref = "sliderimages" src={post[item.id]._embedded["wp:featuredmedia"][0].source_url} alt={'some text'} />
            </div>
           </div>
         </Link>
        </CarouselItem>
      );

    });

    return (
      <div>
        <style>
          {
            `.custom-tag {
                min-width: 100%;
                max-width: 100%;
                height: 420px;
                z-index: 1;
              }
              .item {
                position: relative;
                min-height: 100%;
                overflow: hidden;
                min-width: 100%;
              }
              .item img {
                max-width: 100%;
                min-width: 100%;
                -moz-transition: all 0.3s;
                -webkit-transition: all 0.3s;
                transition: all 0.3s;
              }
              .item:hover img {
                -moz-transform: scale(1.1);
                -webkit-transform: scale(1.1);
                transform: scale(1.1);
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
