import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    onSelect= (active,direction)=>{
        console.log(`active=${active} && direction=${direction}`);
    }
    slideNext=()=>{
      this.slider.slideNext();
    }
    slidePrev=()=>{
      this.slider.slidePrev();
    }
    goToSlide=()=>{
      this.slider.goToSlide(4);
    }
    _changeIcon=()=>{
      let {leftIcon,rightIcon}=this.state;
      if(leftIcon && rightIcon){
        this.setState({
          leftIcon:undefined,
          rightIcon:undefined
        });
      }
      else{
        this.setState({
          leftIcon:<span className="glyphicon glyphicon-glass"></span>,
          rightIcon:<span className="glyphicon glyphicon-music"></span>
        });
      }
    }
    render() {
      let {leftIcon,rightIcon}=this.state;
      return(
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <React_Bootstrap_Carousel
                animation={true}
                slideshowSpeed={3000}
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                onSelect={this.onSelect}
                ref={r=>this.slider=r}
                className="carousel-fade"
              >
                <div style={{height:400}} className='images'>
                      <img style={{width:"100%",height:"100%"}} src="https://www.spellingcity.com/images/landing/parents/parents_landing_mom_kids.jpg" />
                      <div
                        style={{backgroundColor: 'rgba(0, 0, 0, .6)',width:'100%',height:'100%',paddingTop:'150px',color:'white',fontSize:'250%'}}
                        className="carousel-center">
                          PairRent<br/> A place for single Parents looking to find other single parents as roommates.
                        </div>
                  </div>
                <div style={{height:400}} className='images'>
                  <img
                    style={{width:"100%",height:"100%"}}
                    src="http://static-yourtango-com.imgix.net/sites/default/files/image_blog/single%20parent%20life.jpg?auto=compress,format&q=30&fit=crop&w=774&h=386"
                  />
                  <div
                    style={{backgroundColor: 'rgba(0, 0, 0, .6)',width:'100%',height:'100%',paddingTop:'150px',color:'white',fontSize:'250%'}}
                    className="carousel-center">
                      Safe and Secure<br/> PairRent runs backgrounds on all of its users.
                    </div>
                </div>
                <div style={{height:400}} className='images'>
                  <img
                    style={{width:"100%",height:"100%"}}
                    src="http://childrensministry.com/wp-content/upload/children/media/2012/06/Single-Parent-Ministry-From-a-Dads-Point-of-View.png"
                  />
                  <div
                    style={{backgroundColor: 'rgba(0, 0, 0, .6)',width:'100%',height:'100%',paddingTop:'225px',color:'white',fontSize:'250%'}}
                    className="carousel-center">
                      center Text
                    </div>
                </div>
              </React_Bootstrap_Carousel>
            </div>
          </div>
        </div>
      );
    }
  }

export default Carousel;
