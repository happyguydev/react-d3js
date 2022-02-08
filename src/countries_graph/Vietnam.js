import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BarChart} from 'react-d3-components';
import {LineChart } from 'react-d3-components';
import Slider from "react-slick";
import * as d3 from "d3";
import {HorizontalBar,Pie, Bar} from 'react-chartjs-2';
//var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
const data_1 = {
  labels: ['2013-2014', '2014-2015', '2015-2016','2016-2017'],
  datasets: [
    {
      label: 'somethingA',
      backgroundColor: 'rgb(68, 114, 196)',
      borderColor: 'rgb(68, 114, 196)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgb(68, 114, 196)',
      hoverBorderColor: 'rgb(68, 114, 196)',
      data: [73.9, 79.5, 76.4, 69.3],
      backgroundColor:[ 
        "rgb(68, 114, 196)",
        "rgb(68, 114, 196)",
        "rgb(68, 114, 196)",
        "rgb(68, 114, 196)",
        "rgb(68, 114, 196)"
      ],
    },
    {
      label: 'somethingB',
      backgroundColor: '#ed7d31',
      borderColor: '#ed7d31',
      borderWidth: 1,
      hoverBackgroundColor: '#ed7d31',
      hoverBorderColor: '#ed7d31',
      data: [13.8, 7.9, 9, 21.2],
      backgroundColor:[ 
        "#ed7d31",
        "#ed7d31",
        "#ed7d31",
        "#ed7d31",
        "#ed7d31"
      ],
    },
    {
      label: 'somethingC',
      backgroundColor: '#a5a5a5',
      borderColor: '#a5a5a5',
      borderWidth: 1,
      hoverBackgroundColor: '#a5a5a5',
      hoverBorderColor: '#a5a5a5',
      data: [18.9, 13.8, 14.9, 12.2],
      backgroundColor:[ 
        "#a5a5a5",
        "#a5a5a5",
        "#a5a5a5",
        "#a5a5a5",
        "#a5a5a5"
      ],
    },
    {
      label: 'somethingD',
      backgroundColor: '#ffc000',
      borderColor: '#ffc000',
      borderWidth: 1,
      hoverBackgroundColor: '#ffc000',
      hoverBorderColor: '#ffc000',
      data: [6.8, 6.5, 6.3, 6.6],
      backgroundColor:[ 
        "#ffc000",
        "#ffc000",
        "#ffc000",
        "#ffc000",
        "#ffc000"
      ],
    },
    {
      label: 'somethingD',
      backgroundColor: '#5b9bd5',
      borderColor: '#5b9bd5',
      borderWidth: 1,
      hoverBackgroundColor: '#5b9bd5',
      hoverBorderColor: '#5b9bd5',
      data: [2.9, 2.9, 2.5, 3.2],
      backgroundColor:[ 
        "#5b9bd5",
        "#5b9bd5",
        "#5b9bd5",
        "#5b9bd5",
        "#5b9bd5"
      ],
    } 
  ]
};
 const data_2= {
  labels: ['for SMEs using PayPal','for offline PayPal mirror basket','for overall offline exports'],
  datasets: [
    {
      
      backgroundColor: 'rgb(68, 114, 196)',
      borderColor: 'rgb(68, 114, 196)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgb(68, 114, 196)',
      hoverBorderColor: 'rgb(68, 114, 196)',
      data: [37,-3,-3]
     
    }
  ]
};
const data_3 = {
	labels: [
    'inclumbent small business using PayPal',
		'new entrants using PayPal'
	],
	datasets: [{
		data: [46, 54],
		backgroundColor: [
      '#4472c4',
	   	'#ed7d31'
		]
	}]
};

class Vietnam extends React.Component {
    constructor(props) {
        super(props);
        
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.state = { width: window.innerWidth, }; // responsive mobile
        
      }
     
      play() {
        this.slider.slickPlay();
      }
      pause() {
        this.slider.slickPause();
      }
     
    // responsive mobile Start
    componentWillMount() {
      window.addEventListener('resize', this.handleWindowSizeChange);
    }

    // make sure to remove the listener
    // when the component is not mounted anymore
    componentWillUnmount() {
      window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
      this.setState({ width: window.innerWidth });
    };  

// responsive mobile end...  
    render(){
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000
          };
          const { width } = this.state; // responsive mobile
		      const isMobile = width <= 500; // responsive mobile
          if (isMobile) {
            return(
               <div>
               
                      <Slider ref={slider => (this.slider = slider)} {...settings}>
                          <div className="br_sldr_upr">
                            <div className="bar_graph bar_sldr">
                              <h2 style={{textAlign: 'center'}}>Change in number of trade partners between 2013 and 2017<span style={{'font-size': '15px'}}>(*offline overall and PayPal mirror basket comparison between 2013 and 2016) </span></h2>
                             <HorizontalBar data={data_2} />
                            </div>
                          </div> 
                          <div className="br_sldr_upr">
                            <div className="bar_graph bar_sldr">
                              <h2 style={{textAlign: 'center'}}>Growth rate comparison</h2>
                              <Bar
                              data={data_1}
                              width={320}
                              height={400}
                              margin={{top: 10, bottom: 50, left: 50, right: 10}}
                              options={{
                                legend: {
                                  display: false
                                },
                                scales: {
                                  yAxes: [{
                                    ticks: {
                                      beginAtZero:true,
                                      callback: function(value, index, values) {
                                        return (value*1)+'%';
                                      },
                                    },
                                  }]
                                },
                              }}
                            />
                            </div>
                          </div>
                          <div className="br_sldr_upr">
                            <h2>contribution to growth in export volume using PayPal (2013-2017)</h2>
                            <div className="bar_graph bar_sldr">
                              <Pie data={data_3} />
                            </div>
                          </div>
                         
                      </Slider>
                      
                      <div className="ply_pause_btn" style={{ textAlign: "center" }}>
                        <div className="both_ply_pause">
                          <button className="button" onClick={this.play}>
                            <img src="image/play_button.png" />
                          </button>
                          <button className="button pause_btn" onClick={this.pause}>
                            <img src="image/pause_button.png" />
                          </button>
                        </div>
                      </div>
                    </div>
              
              
                          
            );
          }
          else{
            return(
              <div>
              
                     <Slider ref={slider => (this.slider = slider)} {...settings}>
                         <div className="br_sldr_upr">
                           <div className="bar_graph bar_sldr">
                             <h2 style={{textAlign: 'center'}}>Change in number of trade partners between 2013 and 2017<span style={{'font-size': '15px'}}>(*offline overall and PayPal mirror basket comparison between 2013 and 2016) </span></h2>
                            <HorizontalBar data={data_2} />
                           </div>
                         </div> 
                         <div className="br_sldr_upr">
                           <div className="bar_graph bar_sldr">
                             <h2 style={{textAlign: 'center'}}>Growth rate comparison</h2>
                             <Bar
                              data={data_1}
                              width={680}
                              height={400}
                              margin={{top: 10, bottom: 50, left: 50, right: 10}}
                              options={{
                                legend: {
                                  display: false
                                },
                                scales: {
                                  yAxes: [{
                                    ticks: {
                                      beginAtZero:true,
                                      callback: function(value, index, values) {
                                        return (value*1)+'%';
                                      },
                                    },
                                  }]
                                },
                              }}
                            />
                           </div>
                         </div>
                         <div className="br_sldr_upr">
                           <h2>contribution to growth in export volume using PayPal (2013-2017)</h2>
                           <div className="bar_graph bar_sldr">
                             <Pie data={data_3} />
                           </div>
                         </div>
                        
                     </Slider>
                     
                     <div className="ply_pause_btn" style={{ textAlign: "center" }}>
                       <div className="both_ply_pause">
                         <button className="button" onClick={this.play}>
                           <img src="image/play_button.png" />
                         </button>
                         <button className="button pause_btn" onClick={this.pause}>
                           <img src="image/pause_button.png" />
                         </button>
                       </div>
                     </div>
                     <div className="slider_whole_dot">
                        <a className="button frst_sld"  onClick={e => this.slider.slickGoTo(0)}>
                          <div className="sldr_dot"></div>
                          <div class="sldr_line"></div>
                          <div className="year_dot">2013</div>           
                        </a>
                        <a className="button frst_sld"  onClick={e => this.slider.slickGoTo(1)}>
                          <div className="sldr_dot"></div>
                          <div class="sldr_line"></div>
                          <div className="year_dot">2014</div> 
                        </a>
                        <a className="button frst_sld"  onClick={e => this.slider.slickGoTo(2)}>
                          <div className="sldr_dot"></div>
                          <div class="sldr_line"></div>
                          <div className="year_dot">2015</div> 
                        </a>
                        <a className="button frst_sld"  onClick={e => this.slider.slickGoTo(3)}>
                          <div className="sldr_dot"></div>
                          <div class="sldr_line sldr_line_last"></div>
                          <div className="year_dot">2016</div> 
                        </a>
                      </div>
                   </div>
             
             
                         
           );
          }
    }
} 
export default Vietnam;
