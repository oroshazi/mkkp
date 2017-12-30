import React, { Component } from "react"
import { geoMercator, geoPath, geoAlbers, geoCentroid,geoAlbersUsa } from "d3-geo"
import { feature } from "topojson-client"

class HuMap extends Component {
  constructor() {
    super()
    this.state = {
      worlddata: [],
      cities: [
        { city: "Bácsalmas",           coordinates: [-26.0000,53.0000],  candidate: "Példa Jelőlt1"},
        { city: "Izsák",               coordinates: [19.009228, 47.182560],  candidate: "Példa Jelőlt2"},
        { city: "Jánoshalma",          coordinates: [77.1025,28.7041],   candidate: "Példa Jelőlt3"},
        { city: "Kalocsa",             coordinates: [120.9842,14.5995],  candidate: "Példa Jelőlt4"},
        { city: "Kecel",               coordinates: [126.9780,37.5665],  candidate: "Példa Jelőlt5"},
        { city: "Kecskemét",           coordinates: [121.4737,31.2304],  candidate: "Példa Jelőlt6"},
        { city: "Kiskőrös",            coordinates: [67.0099,24.8615],   candidate: "Példa Jelőlt7"},
        { city: "Kiskunfélegyháza",    coordinates: [116.4074,39.9042],  candidate: "Példa Jelőlt8"},
        { city: "Kunszentmiklós",      coordinates: [-74.0059,40.7128],  candidate: "Példa Jelőlt9"},
        { city: "Kiskunmajsa",         coordinates: [113.2644,23.1291],  candidate: "Példa Jelőlt10"},
        { city: "Lajosmizse",          coordinates: [-46.6333,-23.5505], candidate: "Példa Jelőlt11"},
        { city: "Solt",                coordinates: [-99.1332,19.4326],  candidate: "Példa Jelőlt12"},
        { city: "Soltvadkert",         coordinates: [72.8777,19.0760],   candidate: "Példa Jelőlt13"},
        { city: "Szabadszállás",       coordinates: [135.5022,34.6937],  candidate: "Példa Jelőlt14"},
        { city: "Tiszakécske",         coordinates: [37.6173,55.7558],   candidate: "Példa Jelőlt15"},
        { city: "Bóly",                coordinates: [90.4125,23.8103],   candidate: "Példa Jelőlt16"},
        { city: "Mágocs",              coordinates: [31.2357,30.0444],   candidate: "Példa Jelőlt17"},
        { city: "Mohács",              coordinates: [-118.2437,34.0522], candidate: "Példa Jelőlt18"},
        { city: "Pécs",                coordinates: [100.5018,13.7563],  candidate: "Példa Jelőlt19"},
        { city: "Pécsvárad",           coordinates: [88.3639,22.5726],   candidate: "Példa Jelőlt20"},
        { city: "Sellye",              coordinates: [-58.3816,-34.6037], candidate: "Példa Jelőlt21"},
        { city: "Siklós",              coordinates: [51.3890,35.6892],   candidate: "Példa Jelőlt22"},
        { city: "Szetlőrinc",          coordinates: [28.9784,41.0082],   candidate: "Példa Jelőlt23"},
        { city: "Szigetvár",           coordinates: [3.3792,6.5244],     candidate: "Példa Jelőlt24"},
        { city: "Battonya",            coordinates: [114.0579,22.5431],  candidate: "Példa Jelőlt25"},
        { city: "Békés",               coordinates: [-43.1729,-22.9068], candidate: "Példa Jelőlt26"},
        { city: "Békéscsaba",          coordinates: [15.2663,-4.4419],   candidate: "Példa Jelőlt27"},
        { city: "Dévaványa",           coordinates: [117.3616,39.3434],  candidate: "Példa Jelőlt28"},
        { city: "Gyomaendrőd",         coordinates: [2.3522,48.8566],    candidate: "Példa Jelőlt29"},
        { city: "Gyula",               coordinates: [-77.0428,-12.0464], candidate: "Példa Jelőlt30"},
      ],

      fillprop: "#748aad"
    }



    this.handleCountryClick = this.handleCountryClick.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleMarkerMouseOver = this.handleMarkerMouseOver.bind(this);
    this.handleMarkerMouseLeave = this.handleMarkerMouseLeave.bind(this);
  }
  projection() {
    return geoMercator()
      .scale(100)
      .translate([1000 /2, 600 /2])
      .center([20,47]);

  }

  handleCountryClick(countryIndex) {
    console.log("Clicked on country: ", this.state.worlddata[countryIndex])
  }

  handleMarkerClick(i) {
    console.log("Marker: ", this.state.cities[i])
  }

  handleMarkerMouseOver(){
      this.setState((state) => ({ fillprop: "#E91E63" }));
  }

  handleMarkerMouseLeave(){
    this.setState((state) => ({ fillprop: "#748aad" }));
  }




  //  const c_size = 10;
  //  var marker = document.getElementByClass();
  //  marker.r = c_size;


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


    return (
      <div>
      <svg width={ 800 } height={ 600 } viewBox="0 0 800 450">
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
                r={ 5 }
                fill={ this.state.fillprop } //"#E91E63"
                stroke="#FFFFFF"
                className="marker"
                onClick={ () => this.handleMarkerClick(i)}
                //onMouseOver={ () => this.hover({ 'fill':'#f06'  })}
                onMouseEnter={ () => this.handleMarkerMouseOver()}
                onMouseLeave={() => this.handleMarkerMouseLeave ()}
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
