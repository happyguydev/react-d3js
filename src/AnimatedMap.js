
import React, { Component } from "react"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps"
import { Motion, spring } from "react-motion"

const wrapperStyles = {
  width: "auto",
  height: "100%",
  maxHeight: 980,
  margin: "0 auto",
}

const cities = [
  { name: "Zurich", coordinates: [8.5417,47.3769] },
  { name: "Singapore", coordinates: [103.8198,1.3521] },
  { name: "San Francisco", coordinates: [-122.4194,37.7749] },
  { name: "Sydney", coordinates: [151.2093,-33.8688] },
  { name: "Lagos", coordinates: [3.3792,6.5244] },
  { name: "Buenos Aires", coordinates: [-58.3816,-34.6037] },
  { name: "Shanghai", coordinates: [121.4737,31.2304] },
]

class AnimatedMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      center: this.props.center,
      zoom: 2,
      div: this.props.div,
      world: this.props.geography,
    }
    this.handleZoomIn = this.handleZoomIn.bind(this)
    this.handleZoomOut = this.handleZoomOut.bind(this)
    this.handleCityClick = this.handleCityClick.bind(this)
    this.handleReset = this.handleReset.bind(this)
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

  handleZoomIn() {
    this.setState({
      zoom: this.state.zoom * 2,
    })
  }
  handleZoomOut() {
    this.setState({
      zoom: this.state.zoom / 2,
    })
  }
  handleCityClick(city) {
    this.setState({
      zoom: 2,
      center: city.coordinates,
    })
  }
  handleReset() {
    this.setState({
      center: [0,20],
      zoom: 1,
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleZoomIn}>
          { "Zoom in" }
        </button>
        <button onClick={this.handleZoomOut}>
          { "Zoom out" }
        </button>
        <button onClick={this.handleReset}>
          { "Reset" }
        </button>
        <Motion
          defaultStyle={{
            zoom: 2,
            x: -70,
            y: 23,
          }}
          style={{
            zoom: spring(this.state.zoom, {stiffness: 210, damping: 20}),
            x: spring(this.state.center[0], {stiffness: 210, damping: 20}),
            y: spring(this.state.center[1], {stiffness: 210, damping: 20}),
          }}
          >
          {({zoom,x,y}) => (
            <ComposableMap
              projectionConfig={{ scale: 205 }}
              width={980}
              height={980}
              style={wrapperStyles}
              >
              <ZoomableGroup center={[x,y]} zoom={zoom}>
                <Geographies geography={this.state.world}>
                  {(geographies, projection) =>
                    geographies.map((geography, i) => geography.id !== "010" && (
                      <Geography
                        key={i}
                        geography={geography}
                        projection={projection}
                        style={{
                          default: {
                            fill: "#AAD3F4",
                            stroke: "#607D8B",
                            strokeWidth: 0.0,
                            outline: "none",
                          },
                          hover: {
                            fill: "#CBE7F8",
                            stroke: "#607D8B",
                            strokeWidth: 0.0,
                            outline: "none",
                          },
                          selected: {
                            fill: "#CBE7F8",
                            stroke: "#607D8B",
                            strokeWidth: 0.0,
                            outline: "none",
                          },
                          pressed: {
                            fill: "#FF5722",
                            stroke: "#607D8B",
                            strokeWidth: 0.75,
                            outline: "none",
                          },
                        }}
                      />
                  ))}
                </Geographies>
                <Markers>
                  {cities.map((city, i) => (
                    <Marker
                      key={i}
                      marker={city}
                      onClick={this.handleCityClick}
                      >
                      <circle
                        cx={0}
                        cy={0}
                        r={6}
                        fill="#FF5722"
                        stroke="#DF3702"
                      />
                    </Marker>
                  ))}
                </Markers>
              </ZoomableGroup>
            </ComposableMap>
          )}
        </Motion>
      </div>
    )
  }
}

export default AnimatedMap
