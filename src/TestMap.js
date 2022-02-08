import React from 'react';
import * as topojson from 'topojson';
import * as d3 from 'd3';
import {event as currentEvent} from 'd3-selection';
import worldmapjson from'./worldmapjson';
import country_centroids from'./centroidsjson';

let prevMapFocus = [0,0];

class TestMap extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        world: worldmapjson,
        selectedCountry: this.props.selectedCountry,
        centroids: country_centroids,
        center: this.props.center,
        prevMapFocus: [270,100],
      }
    }

    componentWillMount() {
    }

    componentDidMount() {

        const svg = d3.select(this.refs.anchor),
              { width, height } = this.props;

        let offset = this.props.center;


        const projection = d3.geoMercator()
		    .scale(255)
		    .translate([(width/2),(height/2)]);

	    offset = projection(offset);

	    projection.translate([(width/2),(height/2)]);


	    const scaleFactor = 1;
	    const zoomX = offset[1];
	    const zoomY = offset[0];

	    svg.attr("transform", "scale(" + scaleFactor + ")" +
                "translate(" + zoomX + "," + zoomY + ")");

	    let countryCentroid = [-90,30];

        const path = d3.geoPath(projection);

        const world = this.state.world;

	    const links = this.props.trade_links;

        svg.selectAll("path")
			.data(topojson.feature(world, world.objects.countries).features)
			.enter().append("path")
			.attr("d", path)
			.attr("class", "feature")
			.style("fill", "#aad3f4");
			//.on("click", clicked);

        const arcs = svg.selectAll(".arcs")
	      .data(links)
	      .enter().append("path")
	      .attr('class','arcs')
	      .attr("d", function(c) {
	        var d = {
	          source: projection(countryCentroid),
	          target: projection(c.coordinates),
	        };
	        var dx = d.target[0] - d.source[0],
	          dy = d.target[1] - d.source[1],
	          dr = Math.sqrt(dx * dx + dy * dy)/1.5;
	        return "M" + d.source[0] + "," + d.source[1] + "A" + dr + "," + dr +
	          " 0 0,1 " + d.target[0] + "," + d.target[1];
	      })
	      .style("stroke", "steelblue")
	      .style("stroke-width", 5)
	      .style("fill", "none")
	      .transition()
	      .duration(2000)
	      .attrTween("stroke-dasharray", function() {
	        var len = this.getTotalLength();
	        return function(t) {
	          return (d3.interpolateString("0," + len, len + ",0"))(t)
	        };
	      })
	      .on('end', function(d) {
	        var c = projection(d.coordinates);
	        svg.append('circle')
	          .attr('cx', c[0])
	          .attr('cy', c[1])
	          .attr('r', 0)
	          .style('fill', 'steelblue')
	          .style('fill-opacity', '0.5')
	          .transition()
	          .duration(500)
	          .attr('r', 50)
	          .on('end', function(d) {
	            d3.select(this)
	              .transition()
	              .duration(500)
	              .attr('r', 0);
	          });
	      });
    }

    componentDidUpdate() {
    	const year = this.props.year;


    	d3.selectAll(".arcs").remove();
    	d3.selectAll(".feature").remove();

        const svg = d3.select(this.refs.anchor),
              { width, height } = this.props;

      	let offset = this.props.center;


        const projection = d3.geoMercator()
		    .scale(255)
		    .translate([(width/2),(height/2)]);

	    offset = projection(offset);

	    projection.translate([(width/2),(height/2)]);


	    const scaleFactor = 1;
	    const zoomX = (width/2)-offset[0];
	    const zoomY = (height/2)-offset[1];

	    svg.transition()
	        .ease(d3.easeCubic) 
			.duration(1500)
			.attr("transform", "scale(" + scaleFactor + ")" +
                "translate(" + zoomX + "," + zoomY + ")");

	    let countryCentroid = this.props.center;

        const path = d3.geoPath(projection);

        const world = this.state.world;

	    const links = this.props.trade_links;

        const polys = svg.selectAll(".feature")
			.data(topojson.feature(world, world.objects.countries).features)
			.enter().append("path")
			.attr("d", path)
			.attr("class", "feature")
			.style("fill", "#aad3f4");
			//.on("click", clicked);

        const arcs = svg.selectAll(".arcs")
	      .data(links)
	      .enter().append("path")
	      .attr('class','arcs')
	      .attr("d", function(c) {
	        var d = {
	          source: projection(countryCentroid),
	          target: projection(c.coordinates),
	        };
	        var dx = d.target[0] - d.source[0],
	          dy = d.target[1] - d.source[1],
	          dr = Math.sqrt(dx * dx + dy * dy)/1.5;
	        return "M" + d.source[0] + "," + d.source[1] + "A" + dr + "," + dr +
	          " 0 0,1 " + d.target[0] + "," + d.target[1];
	      })
	      .style("stroke", "steelblue")
	      .style("stroke-width", 5)
	      .style("fill", "none")
	      .transition()
	      .duration(2000)
	      .attrTween("stroke-dasharray", function() {
	        var len = this.getTotalLength();
	        return function(t) {
	          return (d3.interpolateString("0," + len, len + ",0"))(t)
	        };
	      })
	      .on('end', function(d) {
	        var c = projection(d.coordinates);
	        svg.append('circle')
	          .attr('cx', c[0])
	          .attr('cy', c[1])
	          .attr('r', 0)
	          .style('fill', 'steelblue')
	          .style('fill-opacity', '0.5')
	          .transition()
	          .duration(500)
	          .attr('r', 50)
	          .on('end', function(d) {
	            d3.select(this)
	              .transition()
	              .duration(500)
	              .attr('r', 0);
	          });
	      });
    }

    render() {
        const { world } = this.state;

        if (!world) {
            return <p>Loading animation goes here</p>;
        }

        return <g ref="anchor" />;
    }
}

export default TestMap
