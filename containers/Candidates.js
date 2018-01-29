import React        from 'react';

import HuMap        from '../components/HuMap';
import CList        from '../components/CList';
import CProfil      from '../components/CProfil';

import DataStore    from '../flux/stores/DataStore.js';




export default class Candidates extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cities: [
        {id:1 , city: "Bácsalmas",        constituency: "választókörzet #1",   coordinates: [19.332028, 46.120556],  candidate: "Példa Jelőlt1"},
        {id:2 , city: "Izsák",            constituency: "választókörzet #2",   coordinates: [19.009228, 47.182560],  candidate: "Példa Jelőlt2"},
        {id:3 , city: "Jánoshalma",       constituency: "választókörzet #3",   coordinates: [19.326219, 46.292694],   candidate: "Példa Jelőlt3"},
        {id:4 , city: "Kalocsa",          constituency: "választókörzet #4",   coordinates: [18.994211, 46.523588],  candidate: "Példa Jelőlt4"},
        {id:5 , city: "Kecel",            constituency: "választókörzet #5",   coordinates: [19.253890, 46.525120],  candidate: "Példa Jelőlt5"},
        {id:6 , city: "Kecskemét",        constituency: "választókörzet #6",   coordinates: [19.677674, 46.907056],  candidate: "Példa Jelőlt6"},
        {id:7 , city: "Kiskőrös",         constituency: "választókörzet #7",   coordinates: [19.284127, 46.627299],   candidate: "Példa Jelőlt7"},
        {id:8 , city: "Kiskunfélegyháza", constituency: "választókörzet #8",   coordinates: [19.846782, 46.727949],  candidate: "Példa Jelőlt8"},
        {id:9 , city: "Kunszentmiklós",   constituency: "választókörzet #9",   coordinates: [19.161549, 47.017585],  candidate: "Példa Jelőlt9"},
        {id:10 , city: "Kiskunmajsa",     constituency: "választókörzet #10",   coordinates: [19.731121, 46.483340],  candidate: "Példa Jelőlt10"},
        {id:11 , city: "Lajosmizse",      constituency: "választókörzet #11",    coordinates: [19.561074, 47.043312], candidate: "Példa Jelőlt11"},
        {id:12 , city: "Solt",            constituency: "választókörzet #12",    coordinates: [19.027224, 46.807816],  candidate: "Példa Jelőlt12"},
        {id:13 , city: "Soltvadkert",     constituency: "választókörzet #13",    coordinates: [72.8777,19.0760],   candidate: "Példa Jelőlt13"},
        {id:14 , city: "Szabadszállás",   constituency: "választókörzet #14",    coordinates: [135.5022,34.6937],  candidate: "Példa Jelőlt14"},
        {id:15 , city: "Tiszakécske",     constituency: "választókörzet #15",    coordinates: [37.6173,55.7558],   candidate: "Példa Jelőlt15"},
        {id:16 , city: "Bóly",            constituency: "választókörzet #16",    coordinates: [90.4125,23.8103],   candidate: "Példa Jelőlt16"},
        {id:17 , city: "Mágocs",          constituency: "választókörzet #17",    coordinates: [31.2357,30.0444],   candidate: "Példa Jelőlt17"},
        {id:18 , city: "Mohács",          constituency: "választókörzet #18",    coordinates: [-118.2437,34.0522], candidate: "Példa Jelőlt18"},
        {id:19 , city: "Pécs",            constituency: "választókörzet #19",    coordinates: [100.5018,13.7563],  candidate: "Példa Jelőlt19"},
        {id:20 , city: "Pécsvárad",       constituency: "választókörzet #20",    coordinates: [88.3639,22.5726],   candidate: "Példa Jelőlt20"},
        {id:21 , city: "Sellye",          constituency: "választókörzet #21",    coordinates: [-58.3816,-34.6037], candidate: "Példa Jelőlt21"},
        {id:22 , city: "Siklós",          constituency: "választókörzet #22",    coordinates: [51.3890,35.6892],   candidate: "Példa Jelőlt22"},
        {id:23 , city: "Szetlőrinc",      constituency: "választókörzet #23",    coordinates: [28.9784,41.0082],   candidate: "Példa Jelőlt23"},
        {id:24 , city: "Szigetvár",       constituency: "választókörzet #24",    coordinates: [3.3792,6.5244],     candidate: "Példa Jelőlt24"},
        {id:25 , city: "Battonya",        constituency: "választókörzet #25",    coordinates: [114.0579,22.5431],  candidate: "Példa Jelőlt25"},
        {id:26 , city: "Békés",           constituency: "választókörzet #26",    coordinates: [-43.1729,-22.9068], candidate: "Példa Jelőlt26"},
        {id:27 , city: "Békéscsaba",      constituency: "választókörzet #27",    coordinates: [15.2663,-4.4419],   candidate: "Példa Jelőlt27"},
        {id:28 , city: "Dévaványa",       constituency: "választókörzet #28",    coordinates: [117.3616,39.3434],  candidate: "Példa Jelőlt28"},
        {id:29 , city: "Gyomaendrőd",     constituency: "választókörzet #29",    coordinates: [2.3522,48.8566],    candidate: "Példa Jelőlt29"},
        {id:30 , city: "Gyula",           constituency: "választókörzet #30",    coordinates: [-77.0428,-12.0464], candidate: "Példa Jelőlt30"},
      ],
      datafromchild: "helo",
      posts: []
    };
  }
  myCallback = (dataFromChild) => {
        this.setState({ datafromchild: dataFromChild });
    }


  render(){

      return(

        <div style={{}} >
          {/* <HuMap cProps={this.state} callbackFromParent={this.myCallback}/> */}
          {/*<CProfil callbackFromPrent={this.state.datafromchild}/>*/}
          <CList cProps={this.state.cities} />
        </div>

    );

  }
}
