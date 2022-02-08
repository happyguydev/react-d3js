import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BarChart} from 'react-d3-components';

import Slider from "react-slick";
import * as d3 from "d3";
import {HorizontalBar,Pie, Bar} from 'react-chartjs-2';
 
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
      data: [9, 10, 39]
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
      data: [75.8, 19.2, 101.2, 47.4],
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
      data: [-6.8, -34.9, -13, 21.7],
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
      data: [3.1, -3.6, -1.7, 7.2],
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
  
const data_3 = {
	labels: [
    'inclumbent small business using PayPal',
		'new entrants using PayPal'
	],
	datasets: [{
		data: [38, 62],
		backgroundColor: [
      '#4472c4',
	   	'#ed7d31'
    ],
    
  }]
 
};
const options ={
  events: false,
   animation: {
   duration: 500,
   easing: "easeOutQuart",
   onComplete: function () {
   var ctx = this.chart.ctx;
  
   ctx.textAlign = 'center';
   ctx.textBaseline = 'bottom';

   this.data.datasets.forEach(function (dataset) {

    for (var i = 0; i < dataset.data.length; i++) {
      var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
          total = dataset._meta[Object.keys(dataset._meta)[0]].total,
          mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius)/2,
          start_angle = model.startAngle,
          end_angle = model.endAngle,
          mid_angle = start_angle + (end_angle - start_angle)/2;

      var x = mid_radius * Math.cos(mid_angle);
      var y = mid_radius * Math.sin(mid_angle);

      ctx.fillStyle = '#fff';
      if (i == 3){ // Darker text color for lighter background
        ctx.fillStyle = '#444';
      }
      var percent = String(Math.round(dataset.data[i]/total*100)) + "%";
      
      // Display percent in another line, line break doesn't work for fillText
      ctx.fillText(percent, model.x + x, model.y + y + 15);
    }
   });               
   }
   }
  
	
}
const sngl_bar = value => {
  return 'rgb(68, 114, 196)';
};
class Colombia extends React.Component {
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
                          <Pie data={data_3} options={options} />
                            </div>
                          </div>
                      </Slider>
                      
                      <div className="ply_pause_btn" style={{ textAlign: "center" }}>
                        <div className="both_ply_pause">
                          <button className="button" onClick={this.play}>
                            <img src="/image/play_button.png" />
                          </button>
                          <button className="button pause_btn" onClick={this.pause}>
                            <img src="/image/pause_button.png" />
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
                         <Pie data={data_3} options={options} />
                           </div>
                         </div>
                     </Slider>
                     
                     <div className="ply_pause_btn" style={{ textAlign: "center" }}>
                       <div className="both_ply_pause">
                         <button className="button" onClick={this.play}>
                           <img src="/image/play_button.png" />
                         </button>
                         <button className="button pause_btn" onClick={this.pause}>
                           <img src="/image/pause_button.png" />
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
export default Colombia;
