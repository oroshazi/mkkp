import React, { Component }       from "react"
import { geoMercator,
        geoPath,
        geoAlbers,
        geoCentroid,
        geoAlbersUsa }            from "d3-geo"
import { feature }                from "topojson-client"

class HuMap extends Component {
  constructor() {
    super()
    this.state = {
      worlddata: [],
      fillprop: "#748aad",
      circleR: 11,
      circler: 7
    }

    this.handleCountryClick = this.handleCountryClick.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleMarkerMouseOver = this.handleMarkerMouseOver.bind(this);
    this.handleMarkerMouseLeave = this.handleMarkerMouseLeave.bind(this);
  }
  projection() {
    return geoMercator()
      .scale(6200 )
      .translate([825 /2, 400 /2])
      .center([19.30, 47.11]);
  }

  handleCountryClick(countryIndex) {
  // TODO
  }

  handleMarkerClick(i) {
  // TODO
  }

  //Changing circle color & r attr + passing data to parent onMouseOver
  handleMarkerMouseOver(i){
    var cir = document.getElementById(i)
    cir.style.fill = "#E91E63";
    cir.setAttribute("r", this.state.circleR);
    this.props.callbackFromParent(this.props.cProps.cities[i])

  }

  handleMarkerMouseLeave(i){
    var cir = document.getElementById(i)
    cir.style.fill = "#748aad";
    cir.setAttribute("r", this.state.circler);

  }

  componentDidMount() {
    fetch("/admin_6.json")
      .then(response => {
        if (response.status !== 200) {
          console.log(`There was a problem: ${response.status}`)
          return
        }
        response.json().then(worlddata => {
          this.setState({
            worlddata: feature(worlddata, worlddata.objects.admin_6).features,
          })
        })
      })
  }
  render() {

    return (
      <div>

      <svg style={{width: '900px', height:'600'}} viewBox="0 0 800 450">
        <g className="admin_6.json"  >
          {
            this.state.worlddata.map((d,i) => (
              <path
                key={ `path-${ i }` }
                d={ geoPath().projection(this.projection())(d) }
                fill={ `rgba(25,25,25,${ 1 / this.state.worlddata.length * i})` }
                stroke="#FFFFFF"
                strokeWidth={ 1 }
                onClick={ () => this.handleCountryClick(i) }
              />
            ))
          }
        </g>
        <g className="markers">
          {
            this.props.cProps.cities.map((city, i) => (
              <circle
                propKey={ `marker-${i}` }
                className={`circle- ${ i }`}
                cx={ this.projection()(city.coordinates)[0] }
                cy={ this.projection()(city.coordinates)[1] }
                r={ 7 }
                fill={ this.state.fillprop } //"#E91E63"
                stroke="#FFFFFF"
                className="marker"
                id={i}
                onClick={ () => this.handleMarkerClick(i)}
                onMouseEnter={ () => this.handleMarkerMouseOver(i)}
                onMouseLeave={() => this.handleMarkerMouseLeave (i)}
                onMouseOver={()=> console.log(document.getElementById(i)) }
              />

            ))
          }
        </g>
      </svg>

      </div>
    )
  }
}

export default HuMap
