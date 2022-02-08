import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BarChart} from 'react-d3-components';
import Slider from "react-slick";
import * as d3 from "d3";
//var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
const data = [{
    values: [{x: 'for overall offline exports', y: -1}, {x: 'for offline PayPal mirror basket', y: -5}, {x: 'for SMEs using PayPal', y: 20}]
  }];
  const data_1 = [
    {
    label: 'somethingA',
    values: [{x: '2013-2014', y: 6.2}, {x: '2014-2015', y: 14.5}, {x: '2015-2016', y: 33.2}, {x: '2016-2017', y: 36.9}]
    },
    {
    label: 'somethingB',
    values: [{x: '2013-2014', y: -9.9}, {x: '2014-2015', y: 17}, {x: '2015-2016', y: 1.7}, {x: '2016-2017', y: 1.1}]
    },
    {
    label: 'somethingC',
    values: [{x: '2013-2014', y: -9.1}, {x: '2014-2015', y: -7.4}, {x: '2015-2016', y: -5.6}, {x: '2016-2017', y: 3.5}]
    },
    {
    label: 'somethingD',
    values: [{x: '2013-2014', y: 1}, {x: '2014-2015', y: 0}, {x: '2015-2016', y: -0.5}, {x: '2016-2017', y: 1.7}]
    },
    {
    label: 'somethingE',
    values: [{x: '2013-2014', y: 2.9}, {x: '2014-2015', y: 2.9}, {x: '2015-2016', y: 2.5}, {x: '2016-2017', y: 3.2}]
    }
  ];
  const data_2 = [{
    values: [{x: 'for overall offline exports', y: -1}, {x: 'for offline PayPal mirror basket', y: -5}, {x: 'for SMEs using PayPal', y: 20}]
  }];
  let abc;
class Graph_slider extends React.Component {
    constructor(props) {
        super(props);
  
         this.state = {
            div: this.props.div
         
        }
      }
     componentWillReceiveProps(nextProps) {
        if(nextProps.div !== 0){
            this.setState({div: nextProps.div});
            
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const {div} = this.state;
        if(div !== prevState.div){
            
        }

    }
      
      
    render(){
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000
          };
            return(
                <div>
                  <div className="App">
                   
               
                      {this.state.div}
                      
                      
                  </div>
                </div>
            );
            
    }
} 
export default Graph_slider;