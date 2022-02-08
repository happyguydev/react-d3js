import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BarChart} from 'react-d3-components';
import Slider from "react-slick";
import * as d3 from "d3";
import {HorizontalBar, Line, Bar} from 'react-chartjs-2';
//var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
const data = {
  labels: ['for overall offline exports', 'for offline PayPal mirror basket', 'for SMEs using PayPal'],
  datasets: [
    {
      label: '',
      backgroundColor: 'rgb(68, 114, 196)',
      borderColor: 'rgb(68, 114, 196)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgb(68, 114, 196)',
      hoverBorderColor: 'rgb(68, 114, 196)',
      data: [-1, -5, 20]
    }
  ]
};
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
      data: [6.2, 14.9, 32.8, 36.9],
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
      data: [-9.9, 17, 1.7, 1.1],
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
      data: [-9.1, -7.4, -5.6, 3.5],
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
      data: [1, 0, -0.5, 1.7],
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
  labels: ['new entrants using PayPal', 'incumbent small businesses using PayPal'],
  datasets: [
    {
      backgroundColor: 'rgb(68, 114, 196)',
      borderColor: 'rgb(68, 114, 196)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgb(68, 114, 196)',
      hoverBorderColor: 'rgb(68, 114, 196)',
      data: [27, -127]
    }
  ]
 
    
};
const options= {
    scales: {
        yAxes: [{ticks: {padding: -78,
        },
        scaleLabel:false,
      gridLines:false}]
    }
}
  const data_3 =  {
       labels: ['2013', '2014', '2015', '2016', '2017'],
       
    datasets: [
      {
      label: '',
      data: [100, 108, 110, 113, 120],
      lineTension: 0,
      fill: true,
      borderColor: 'rgb(31, 119, 180)',
      borderWidth:5,
      backgroundColor: 'transparent',
      pointBorderColor: 'rgb(31, 119, 180)',
      pointBackgroundColor: 'rgb(31, 119, 180)',
      pointRadius: 10,
      pointHoverRadius: 15,
      pointHitRadius: 30,
      pointBorderWidth: 2,
      pointStyle: 'circle',
      
      }
     
    ]
  }
  const options_1 = {
      legend: {
        display: false
    },
  scaleShowGridLines: true,
  scaleGridLineColor: 'rgba(0,0,0,.05)',
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  bezierCurve: true,
  bezierCurveTension: 0.4,
  pointDot: true,
  scales: {
    yAxes: [{
        ticks: {
            min: 98,
            callback: function(value, index, values) {
                return '';
            },
        },
        gridLines: {
            display: false,
            drawBorder: false,
            borderDash:[]
        },
    }]
  },
  pointDotRadius: 4,
  pointDotStrokeWidth: 1,
 
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: true,
  
}
 const sngl_bar = value => {
   return 'rgb(68, 114, 196)';
 };
class Argentina extends React.Component {
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
                            {/* <h2 style={{textAlign: 'center'}}>Change in number of trade partners between 2013 and 2017</h2> */}
                            <Bar
                              data={data}
                              width={320}
                              height={400}
                              colorScale={sngl_bar}
                              barPadding={0.8}
                              margin={{top: 10, bottom: 50, left: 50, right: 10}}
                              options={{
                                maintainAspectRatio: false,
                                legend: {
                                  display: false
                                },
                                scales: {
                                  yAxes: [{
                                    ticks: {
                                      beginAtZero:true,
                                      callback: function(value, index, values) {
                                        return '';
                                      },
                                    },
                                    gridLines: {
                                      display: false,
                                      drawBorder: true,
                                      borderDash:[]
                                    },
                                  }],
                                  xAxes: [{
                                    display:true,
                                    stacked: true,
                                    ticks: {
                                      display: true,
                                      beginAtZero:true
                                    },
                                    gridLines: {
                                      display: true,
                                      drawBorder: false,
                                      borderDash:[]
                                    },
                                  }]
                                },
                              }}
                            />
                          </div>
                        </div>
                        <div className="br_sldr_upr">
                          <div className="bar_graph bar_sldr">
                            {/* <h2 style={{textAlign: 'center'}}>Change in number of trade partners between 2013 and 2017</h2> */}
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
                          <div className="bar_graph bar_sldr">
                            {/* <h2 style={{textAlign: 'center'}}>Change in number of trade partners between 2013 and 2017</h2> */}
                            <HorizontalBar data={data_2} options={options} />
                          </div>
                        </div>
                        <div className="br_sldr_upr">
                          <div className="bar_graph bar_sldr"> 
                            <Line data={data_3}
                            margin={{top: 10, bottom: 50, left: 50, right: 10}}
                            options={options_1}
                           width={320}
                            height={400}/>
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
                      <div className="slider_whole_dot_mob">
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
          else{
            return(
                <div>
               
                      <Slider ref={slider => (this.slider = slider)} {...settings}>
                       <div className="br_sldr_upr">
                          <div className="bar_graph bar_sldr">
                            {/* <h2 style={{textAlign: 'center'}}>Change in number of trade partners between 2013 and 2017</h2> */}
                            <Bar
                              data={data}
                              width={680}
                              height={400}
                              colorScale={sngl_bar}
                              barPadding={0.8}
                              margin={{top: 10, bottom: 50, left: 50, right: 10}}
                              options={{
                                maintainAspectRatio: false,
                                legend: {
                                  display: false
                                },
                                scales: {
                                  yAxes: [{
                                    ticks: {
                                      beginAtZero:true,
                                      callback: function(value, index, values) {
                                        return '';
                                      },
                                    },
                                    gridLines: {
                                      display: false,
                                      drawBorder: true,
                                      borderDash:[]
                                    },
                                  }],
                                  xAxes: [{
                                    display:true,
                                    stacked: true,
                                    ticks: {
                                      display: true,
                                      beginAtZero:true
                                    },
                                    gridLines: {
                                      display: true,
                                      drawBorder: false,
                                      borderDash:[]
                                    },
                                  }]
                                },
                              }}
                            />
                          </div>
                        </div>
                        <div className="br_sldr_upr">
                          <div className="bar_graph bar_sldr">
                            {/* <h2 style={{textAlign: 'center'}}>Change in number of trade partners between 2013 and 2017</h2> */}
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
                          <div className="bar_graph bar_sldr">
                            {/* <h2 style={{textAlign: 'center'}}>Change in number of trade partners between 2013 and 2017</h2> */}
                            <HorizontalBar data={data_2} options={options} />
                          </div>
                        </div>
                        <div className="br_sldr_upr">
                          <div className="bar_graph bar_sldr"> 
                            <Line data={data_3}
                            margin={{top: 10, bottom: 50, left: 50, right: 10}}
                            options={options_1}
                           width={680}
                            height={400}/>
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
export default Argentina;
