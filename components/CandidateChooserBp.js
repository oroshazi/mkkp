import React, { Component }       from "react"
import { geoMercator,
        geoPath,
        geoAlbers,
        geoCentroid,
        geoAlbersUsa }            from "d3-geo"
import { feature }                from "topojson-client"
import { Tooltip }                from 'reactstrap';
import { Container, Row, Col }    from 'reactstrap';


class CandidateChooserBp extends Component {
  constructor() {
    super()
    this.state = {
      worlddata: [],
      fillprop: "#748aad",
      circleR: 25,
      circler: 20,
      tooltipOpen: false,
      tooltipKey: '0',
      active: false,
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
      .scale(85000)
      .translate([825 /2, 400 /2])
      .center([19.03991, 47.49801 ]);
  }

  handleCountryClick(d) {
    var    scale = .9 / Math.max(dx / width, dy / height);
    var    translate = [width / 2 - scale * x, height / 2 - scale * y];
    geoMercator().transition()
        .duration(750)
        .style("stroke-width", 1.5 / scale + "px")
        .attr("transform", "translate(" + translate + ")scale(" + scale + ")");
  }


  handleMarkerClick(i) {
  this.props.callbackFromParent(i)
  console.log('i', i);
  this.changeStatus();
  }

  changeStatus() {
    this.props.isBudapest('budapest')
    console.log(this.props.CandidateProps.status);
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
    fetch("/bp.json")
      .then(response => {
        if (response.status !== 200) {
          console.log(`There was a problem: ${response.status}`)
          return
        }
        response.json().then(worlddata => {
          this.setState({
            worlddata: feature(worlddata, worlddata.objects.admin_9).features,
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
              target={'CricleBP-' + this.state.tooltipKey}
              toggle={this.toggle}
              >
                <Container>
                    <Row>
                      <Col > {this.props.CandidateProps.budapest[this.state.tooltipKey].candidate}</Col>
                    </Row>
                    <Row>
                      <Col > {this.props.CandidateProps.budapest[this.state.tooltipKey].city}</Col>
                    </Row>
              </Container>

          </Tooltip>


      <svg style={{    maxWidth: '100% ', height: 'auto', position: 'absolute', bottom: '0px', top: '0', right: '0px', paddingLeft: '20px', paddingRight: '20px'}}
        viewBox="60 -100 750 600">
        <g className="bp.json"  >
          {
            this.state.worlddata.map((d,i) => (
              <path
                key={ `path-${ i }` }
                d={ geoPath().projection(this.projection())(d) }
                //fill={ `rgba(44, 116, 106,${ 1 / this.state.worlddata.length * i})` }
                 fill={ `rgb(172, 92, 92)` }
                stroke="#000000"
                strokeWidth={ 1 }
                onClick={() => console.log('d', this)}
                // onClick={ () => this.handleCountryClick(d) }
              />
            ))

          }
        </g>
        <g className="markers">
          {
            this.props.CandidateProps.budapest.map((city, i) => (
              <circle
                propKey={ `marker-${i}` }
                className={`circle- ${ i }`}
                cx={ this.projection()(city.coordinates)[0] }
                cy={ this.projection()(city.coordinates)[1] }
                r={ 20 }
                fill={ this.state.fillprop } //"#E91E63"
                //fill= {'../src/Magyar_Kétfarkú_Kutyapárt_logó.svg'}
                stroke="#FFFFFF"
                className="marker"
                id={'CricleBP-' + i}
                onClick={ () => this.handleMarkerClick(i)}
                // onClick={(e) => this.changeStatus(e)}
                onMouseEnter={ () => this.handleMarkerMouseOver('CricleBP-' , i  )}
                onMouseLeave={() => this.handleMarkerMouseLeave ('CricleBP-', i  )}
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

export default CandidateChooserBp
