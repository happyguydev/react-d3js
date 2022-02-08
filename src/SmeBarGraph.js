import React, { Component } from 'react';
import * as topojson from 'topojson';
import * as d3 from 'd3';
import {event as currentEvent} from 'd3-selection';

class SmeBarGraph extends React.Component {
    constructor(props) {
      super(props)
    }

    componentWillMount() {
    }

    componentDidMount() {
    	const { width, height } = this.props;

    	// Define the dimensions
		const dimensions = {
		  gWidth: width,
		  gHeight: height,
		  gMargin: 40,
		  gInnerWidth: width-50,
		  gInnerHeight: height-30,
		  bMargin: 10
		};

    	const chart = d3.select(this.refs.anchor);

    //     var chart = d3.select('#chartContainer')
		  // .append('svg')
		  // .attrs({
		  //   width: dimensions.gWidth,
		  //   height: dimensions.gHeight
		  // });

        // Define some sample data
		const data = [
		  { value: 99, label: 'Mon' },
		  { value: 63, label: 'Tues' },
		  { value: 41, label: 'Wed' },
		  { value: 100, label: 'Thur' },
		  { value: 50, label: 'Fri' },
		];

		// Define the scales
		const xScale = d3.scaleLinear()
		               .domain ([0, data.length])
		               .range([0, dimensions.gInnerWidth]);

		// Get the max value for the data. This will determine how high our y-scale is
		const maxValue = d3.max(data, function( d ) { return d.value; });

		// Now define the yScale, or vertical scale
		const yScale = d3.scaleLinear()
		               .domain([0, maxValue])
		               .range([0, dimensions.gInnerHeight]);

		// Finally, define the yAxis scale. This is identical to the yScale except that the domain is inverted. This is because the scale is determined from top down, rather than bottom up, and the data would look upside down otherwise.
		const yAxisScale = d3.scaleLinear()
		                   .domain([maxValue, 0])
		                   .range([0, dimensions.gInnerHeight]);
        
		// Render the y-axis
		const yAxis = d3.axisLeft( yAxisScale )
		               // This is to make the horizontal tick lines stretch all the way across the chart
		              .tickSizeInner( -dimensions.gInnerWidth )
		               // This spaces the tick values slights from the axis
		              .tickPadding( 10 );

		chart.append('g')
			.attr('class','axis axis-y')
			.attr( 'transform', 'translate(' + dimensions.gMargin + ', ' + dimensions.gMargin + ')' )
			.call( yAxis );

		// Define the ticks for the xAxis
		let xTicks = []
		for (var i = 0; i < data.length; i++) {
			
		  xTicks.push( i + 0.5 ); // 0.5 is to ensure the ticks are offset correctly to match the data
		}
		// Render the x-axis
		const xAxis = d3.axisBottom( xScale )
		              .tickValues( xTicks )
		              .tickFormat(function(d, i) {
		                return data[i].label;
		              });

		chart.append('g')
		     .attr('class', 'axis axis-x')
		     .attr( 'transform', 'translate(' + dimensions.gMargin + ', ' + ( dimensions.gMargin + dimensions.gInnerHeight ) + ')' )
		     .call( xAxis );


		// Render the bars
		// This is rendered last so the bars appear on top of the axis and not vice versa

		const newWidth = (dimensions.gInnerWidth / data.length) - (dimensions.bMargin * 2 );
		chart.append('g')
		     .selectAll('.barAttributes')
		     .data( data )
		     .enter()
		     .append('rect')
		     .attr( 'class', 'bar-line' )
		     .attr('transform', 'translate(' + dimensions.gMargin + ', ' + dimensions.gMargin + ')')
		     .attr('width', newWidth )
		     .attr('height', function( d, i ) { return yScale( d.value ); })
		     .attr('x', function( d, i ) { return (dimensions.gInnerWidth / data.length) * i + dimensions.bMargin; } )
		     .attr('y', function( d, i ) { return dimensions.gInnerHeight - yScale( d.value ); });
    	}

    componentDidUpdate() {
    	d3.selectAll(".barAttributes").remove();
    	d3.selectAll(".axis").remove();
    	d3.selectAll(".axis-y").remove();
    	d3.selectAll(".bar-line").remove();

    	const { width, height, comps } = this.props;

    	// Define the dimensions
		const dimensions = {
		  gWidth: width,
		  gHeight: height,
		  gMargin: 40,
		  gInnerWidth: width-50,
		  gInnerHeight: height-30,
		  bMargin: 10
		};

    	const chart = d3.select(this.refs.anchor);

    //     var chart = d3.select('#chartContainer')
		  // .append('svg')
		  // .attrs({
		  //   width: dimensions.gWidth,
		  //   height: dimensions.gHeight
		  // });

        // Define some sample data
		const data = comps;
		// for (var i = 0; i < data.length; i++) {
		//   xTicks.push( i + 0.5 ); // 0.5 is to ensure the ticks are offset correctly to match the data
		// }

		


		// Define the scales
		const xScale = d3.scaleLinear()
		               .domain ([0, data.length])
		               .range([0, dimensions.gInnerWidth]);

		// Get the max value for the data. This will determine how high our y-scale is
		const maxValue = d3.max(data, function( d ) { return d.value; });
        const minValue = d3.min(data, function( d ) { return d.value; });
		// Now define the yScale, or vertical scale
		const yScale = d3.scaleLinear()
						.domain([0, maxValue])
						.range([0, dimensions.gInnerHeight]);
		// Finally, define the yAxis scale. This is identical to the yScale except that the domain is inverted. This is because the scale is determined from top down, rather than bottom up, and the data would look upside down otherwise.
		const yAxisScale = d3.scaleLinear()
		                   .domain([maxValue*0.6,0])
		                   .range([0+dimensions.gInnerHeight*0.4, dimensions.gInnerHeight]);
		
						   
		// Render the y-axis
		const yAxis = d3.axisLeft( yAxisScale )
		               // This is to make the horizontal tick lines stretch all the way across the chart
		              .tickSizeInner( -dimensions.gInnerWidth )
		               // This spaces the tick values slights from the axis
		              .tickPadding( 10 )
		              .ticks(4);

		chart.append('g')
			.attr('class','axis axis-y')
			.attr( 'transform', 'translate(' + dimensions.gMargin + ', ' + dimensions.gMargin + ')' )
			.call( yAxis )
            
		// Define the ticks for the xAxis
		let xTicks = []
		for (var i = 0; i < data.length; i++) {
			console.log(data);
		  xTicks.push( i + 0.5 ); // 0.5 is to ensure the ticks are offset correctly to match the data
		}
		// Render the x-axis
		const xAxis = d3.axisBottom( xScale )
		              .tickValues( xTicks )
		              .tickFormat(function(d, i) {
		                return data[i].label;
		              });

		chart.append('g')
		     .attr('class', 'axis axis-x')
		     .attr( 'transform', 'translate(' + dimensions.gMargin + ', ' + ( dimensions.gMargin + dimensions.gInnerHeight ) + ')' )
		     .call( xAxis )
			 .selectAll(".tick text")
			 .call(wrap, dimensions.gInnerWidth/8);
			 function wrap(text, width) {
				//alert(text);
				text.each(function() {
				  var text = d3.select(this),
					  words = text.text().split(/\s+/).reverse(),
					  word,
					  line = [],
					  lineNumber = 0,
					  lineHeight = 1.1, // ems
					  y = text.attr("y"),
					  dy = parseFloat(text.attr("dy")),
					  tspan = text.text(null).append("tspan").attr("xScale", 0).attr("xScale", y).attr("dy", dy + "em");
					  console.log(words);
				  while (word = words.pop()) {
					line.push(word)
	;
					tspan.text(line.join(" "));
					if (tspan.node().getComputedTextLength() > width) {
					  line.pop();
					  tspan.text(line.join(" "));
					  line = [word];
					  tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word)
	;
					}
				  }
				});
			}
	
	
		// Render the bars
		// This is rendered last so the bars appear on top of the axis and not vice versa

		const newWidth = (dimensions.gInnerWidth / data.length) - (dimensions.bMargin * 2 );
		chart.append('g')
		     .selectAll('.barAttributes')
		     .data( data )
		     .enter()
		     .append('rect')
		     .attr( 'class', 'bar-line' )
		     .attr('fill', function( d, i ) { return d.color })
		     .attr('transform', 'translate(' + dimensions.gMargin + ', ' + dimensions.gMargin + ')')
		     .attr('width', newWidth )
		     .attr('height', 0)
		     .attr('x', function( d, i ) { return (dimensions.gInnerWidth / data.length) * i + dimensions.bMargin; } )
		     .attr('y', function( d, i ) { return dimensions.gInnerHeight; })
		     .transition()
		     .ease(d3.easeCubic)
			 .duration(500)
			 .delay(function(d,i){ return i*100})//a different delay for each bar
			 .attr('y', function( d, i ) { return dimensions.gInnerHeight - yScale( Math.max(0, d.value) ); })
			 .attr("height", function(d) { return Math.abs(yScale(d.value) - yScale(0)); });
			 
		// 	 .attr("class", function(d, i) { return d[1] < 0 ? "bar negative" : "bar positive"; })
        //   .attr("x", function(d) { return X(d); })
        //   .attr("y", function(d, i) { return d[1] < 0 ? Y0() : Y(d); })
		     
    	}
		
    render() {
    	const { width, height } = this.props;

        return <g ref="anchor" />;
    }
}

export default SmeBarGraph
