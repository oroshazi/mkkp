import React, { Component }       from "react"
import { geoMercator,
        geoPath,
        geoAlbers,
        geoCentroid,
        geoAlbersUsa }            from "d3-geo"
import { feature }                from "topojson-client"
import { Tooltip }                from 'reactstrap';
import { Container, Row, Col }    from 'reactstrap';


class CandidateChooserHuMap extends Component {
  constructor() {
    super()
    this.state = {
      worlddata: [],
      fillprop: "rgb(238, 18, 18)",
      circleR: 25,
      circler: 18,
      tooltipOpen: false,
      tooltipKey: '0'
    }

    this.handleCountryClick = this.handleCountryClick.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleMarkerMouseOver = this.handleMarkerMouseOver.bind(this);
    this.handleMarkerMouseLeave = this.handleMarkerMouseLeave.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  toggle(id) {
   this.setState({
     tooltipOpen: !this.state.tooltipOpen,
     tooltipKey: id,

   });
 }
  projection() {
    return geoMercator()
      .scale(6400 )
      .translate([825 /2, 400 /2])
      .center([19.30, 47.11]);
  }

  handleCountryClick(countryIndex) {
  // TODO
  }

  changeStatus() {
    this.props.isLand('land')
    console.log(this.props.CandidateProps.status);
   }

  handleMarkerClick(i) {
  this.props.callbackFromParent(i)
  this.changeStatus();
  }

  //Changing circle color & r attr + passing data to parent onMouseOver
  handleMarkerMouseOver( str, i){
    var cir = document.getElementById(str.toString() + i)
    cir.style.fill = "#E91E63";
    cir.setAttribute("r", this.state.circleR);
    this.toggle(i)

  }

  handleMarkerMouseLeave(str, i){
    var cir = document.getElementById(str.toString() + i)
    cir.style.fill = "#748aad";
    cir.setAttribute("r", this.state.circler);
    this.toggle(i)

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
        <Tooltip placement="right"
              key={this.state.tooltipKey}
              isOpen={this.state.tooltipOpen}
              target={'Cricle-' + this.state.tooltipKey}
              toggle={this.toggle}
              >
                <Container>
                    <Row>
                      <Col > {this.props.CandidateProps.land[this.state.tooltipKey].candidate}</Col>
                    </Row>
                    <Row>
                      <Col > {this.props.CandidateProps.land[this.state.tooltipKey].city}</Col>
                    </Row>
              </Container>

          </Tooltip>


      <svg style={{width: '550px', height:'auto'}} viewBox="60 -100 750 600">
        <g className="admin_6.json"  >
          {
            this.state.worlddata.map((d,i) => (
              <path
                key={ `path-${ i }` }
                d={ geoPath().projection(this.projection())(d) }
                // fill={ `rgba(44, 116, 106,${ 1 / this.state.worlddata.length * i})` }
                fill={ `rgb(172, 92, 92)` }
                stroke="#000000"
                strokeWidth={ 1 }
                onClick={ () => this.handleCountryClick(i) }
              />
            ))
          }
        </g>
        <g className="markers">
          {
            this.props.CandidateProps.land.map((city, i) => (
              <circle
                propKey={ `marker-${i}` }
                className={`circle- ${ i }`}
                cx={ this.projection()(city.coordinates)[0] }
                cy={ this.projection()(city.coordinates)[1] }
                r={ 15 }
                fill={ this.state.fillprop } //"#E91E63"
                //fill= {'../src/Magyar_Kétfarkú_Kutyapárt_logó.svg'}
                stroke="#FFFFFF"
                className="marker"
                id={'Cricle-' + i}
                onClick={ () => this.handleMarkerClick(i)}
                //onClick={(e) => this.changeStatus(e)}
                onMouseEnter={ () => this.handleMarkerMouseOver('Cricle-' , i)}
                onMouseLeave={() => this.handleMarkerMouseLeave ('Cricle-', i)}
                //onMouseOver={()=> console.log(document.getElementById('Cricle-' + i))}

              />


            ))

          }
        </g>
      </svg>
      {/* */}


      </div>
    )
  }
}

export default CandidateChooserHuMap
