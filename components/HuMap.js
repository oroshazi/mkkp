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
      cities: [
        {id:1 , city: "Bácsalmas",           coordinates: [19.332028, 46.120556],  candidate: "Példa Jelőlt1"},
        {id:2 , city: "Izsák",               coordinates: [19.009228, 47.182560],  candidate: "Példa Jelőlt2"},
        {id:3 , city: "Jánoshalma",          coordinates: [19.326219, 46.292694],   candidate: "Példa Jelőlt3"},
        {id:4 , city: "Kalocsa",             coordinates: [18.994211, 46.523588],  candidate: "Példa Jelőlt4"},
        {id:5 , city: "Kecel",               coordinates: [19.253890, 46.525120],  candidate: "Példa Jelőlt5"},
        {id:6 , city: "Kecskemét",           coordinates: [19.677674, 46.907056],  candidate: "Példa Jelőlt6"},
        {id:7 , city: "Kiskőrös",            coordinates: [19.284127, 46.627299],   candidate: "Példa Jelőlt7"},
        {id:8 , city: "Kiskunfélegyháza",    coordinates: [19.846782, 46.727949],  candidate: "Példa Jelőlt8"},
        {id:9 , city: "Kunszentmiklós",      coordinates: [19.161549, 47.017585],  candidate: "Példa Jelőlt9"},
        {id:10 , city: "Kiskunmajsa",        coordinates: [19.731121, 46.483340],  candidate: "Példa Jelőlt10"},
        {id:11 , city: "Lajosmizse",          coordinates: [19.561074, 47.043312], candidate: "Példa Jelőlt11"},
        {id:12 , city: "Solt",                coordinates: [19.027224, 46.807816],  candidate: "Példa Jelőlt12"},
        {id:13 , city: "Soltvadkert",         coordinates: [72.8777,19.0760],   candidate: "Példa Jelőlt13"},
        {id:14 , city: "Szabadszállás",       coordinates: [135.5022,34.6937],  candidate: "Példa Jelőlt14"},
        {id:15 , city: "Tiszakécske",         coordinates: [37.6173,55.7558],   candidate: "Példa Jelőlt15"},
        {id:16 , city: "Bóly",                coordinates: [90.4125,23.8103],   candidate: "Példa Jelőlt16"},
        {id:17 , city: "Mágocs",              coordinates: [31.2357,30.0444],   candidate: "Példa Jelőlt17"},
        {id:18 , city: "Mohács",              coordinates: [-118.2437,34.0522], candidate: "Példa Jelőlt18"},
        {id:19 , city: "Pécs",                coordinates: [100.5018,13.7563],  candidate: "Példa Jelőlt19"},
        {id:20 , city: "Pécsvárad",           coordinates: [88.3639,22.5726],   candidate: "Példa Jelőlt20"},
        {id:21 , city: "Sellye",              coordinates: [-58.3816,-34.6037], candidate: "Példa Jelőlt21"},
        {id:22 , city: "Siklós",              coordinates: [51.3890,35.6892],   candidate: "Példa Jelőlt22"},
        {id:23 , city: "Szetlőrinc",          coordinates: [28.9784,41.0082],   candidate: "Példa Jelőlt23"},
        {id:24 , city: "Szigetvár",           coordinates: [3.3792,6.5244],     candidate: "Példa Jelőlt24"},
        {id:25 , city: "Battonya",            coordinates: [114.0579,22.5431],  candidate: "Példa Jelőlt25"},
        {id:26 , city: "Békés",               coordinates: [-43.1729,-22.9068], candidate: "Példa Jelőlt26"},
        {id:27 , city: "Békéscsaba",          coordinates: [15.2663,-4.4419],   candidate: "Példa Jelőlt27"},
        {id:28 , city: "Dévaványa",           coordinates: [117.3616,39.3434],  candidate: "Példa Jelőlt28"},
        {id:29 , city: "Gyomaendrőd",         coordinates: [2.3522,48.8566],    candidate: "Példa Jelőlt29"},
        {id:30 , city: "Gyula",               coordinates: [-77.0428,-12.0464], candidate: "Példa Jelőlt30"},
      ],

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
      .scale(6000 )
      .translate([1000 /2, 600 /2])
      .center([20,47]);

  }

  handleCountryClick(countryIndex) {
    console.log("Clicked on country: ", this.state.worlddata[countryIndex])
  }

  handleMarkerClick(i) {
    console.log("Marker: ", this.state.cities[i])
  }

  //Changing circle color & r attr + passing data to parent onMouseOver
  handleMarkerMouseOver(i){
    var cir = document.getElementById(i)
    cir.style.fill = "#E91E63";
    cir.setAttribute("r", this.state.circleR);

    this.props.callbackFromParent(this.state.cities[i])

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

        console.log(this);
        console.log(this.state);
        console.log(this.state.fillprop);
        console.log()


    return (
      <div>
        <h1> Az MKKP jelöltjei</h1>
        <h4> mi mindenhol ottvagyunk </h4>
      <svg style={{width: '800px', height:'520'}} viewBox="0 0 800 450">
        <g className="admin_6.json"  >
          {
            this.state.worlddata.map((d,i) => (
              <path
                key={ `path-${ i }` }
                d={ geoPath().projection(this.projection())(d) }
                fill={ `rgba(38,50,56,${ 1 / this.state.worlddata.length * i})` }
                stroke="#FFFFFF"
                strokeWidth={ 1 }
                onClick={ () => this.handleCountryClick(i) }
              />
            ))
          }
        </g>
        <g className="markers">
          {
            this.state.cities.map((city, i) => (
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
