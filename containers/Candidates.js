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
        {id:1 , city: "Győr",                constituency: "Győr-Moson-Sopron 01.",      slug:"rozsa-regina-2",      coordinates: [17.63512, 47.68333],  candidate: "Rózsa Regina"},
        {id:2 , city: "Jászberény",          constituency: "Jász-Nagykun-Szolnok 02. ",   slug:"csinger-marianna",  coordinates: [19.916663, 47.49998],  candidate: "Csinger Marianna"},
        {id:5 , city: "Debrecen",            constituency: "Hajdú-Bihar 01.",             slug:"szabados-istvan",    coordinates: [21.62731, 47.53160],  candidate: "Szabados István"},
        {id:8 , city: "Kiskunfélegyháza",    constituency: "Bács-Kiskun 04.",             slug:"bodor-sandor",      coordinates: [19.846782, 46.727949],  candidate: "Bodor Sándor"},
        {id:9 , city: "Szeged",              constituency: "Csongrád 02.",                slug:"pal-anna-viktoria-es-pose-rozalinda",  coordinates: [20.14143, 46.25301],  candidate: "Pá Anna Viktória és Pose Rozalinda"},
        {id:10 , city: "Érd",                constituency: "Pest megye 01.",               slug:"szecsi-barbara",    coordinates: [18.90454, 47.39197],  candidate: "Szécsi Barbara"},
        {id:11 , city: "Szombathely",        constituency: "Vas megye 01.",                slug:"petra-livia",    coordinates: [16.62184, 47.23069], candidate: "Viszlay Zoltán Fülöpné Psvekovits Petra Lívia"},
        {id:12 , city: "Kaposvár",           constituency: "Somogy megye 01.",           slug:"toth-barna",    coordinates: [17.79676, 46.35936],  candidate: "Tóth Barna"},
        {id:13 , city: "Gödöllő",            constituency: "Pest megye 06.",            slug:"bosze-gabor",    coordinates: [19.36054, 47.60077],   candidate: "Bősze Gábor"},
        {id:15 , city: "Sopron",          constituency: "Győr-Moson-Sopron  04.",  slug:"tichy-racs-jozsef",    coordinates: [16.58448, 47.68166],   candidate: "Tichy-Rács József"},
        {id:17 , city: "Veszprém",          constituency: "Veszprém 01.",  slug:"szimmer-akos",    coordinates: [17.90930,47.10281],   candidate: "Szimmer Ákos"},
        {id:30 , city: "Gyula",           constituency: "Békés megyei 03.",  slug:"kazinczy-istvan",    coordinates: [21.28333, 46.65 ], candidate: "Kazinczy István"},
        {id:18 , city: "Mohács",          constituency: "választókörzet #18",  slug:"error",    coordinates: [-118.2437,34.0522], candidate: "Példa Jelőlt18"},
        {id:19 , city: "Pécs",            constituency: "választókörzet #19",  slug:"error",    coordinates: [100.5018,13.7563],  candidate: "Példa Jelőlt19"},
        {id:20 , city: "Pécsvárad",       constituency: "választókörzet #20",  slug:"error",    coordinates: [88.3639,22.5726],   candidate: "Példa Jelőlt20"},
        {id:21 , city: "Sellye",          constituency: "választókörzet #21",  slug:"error",    coordinates: [-58.3816,-34.6037], candidate: "Példa Jelőlt21"},
        {id:22 , city: "Siklós",          constituency: "választókörzet #22",  slug:"error",    coordinates: [51.3890,35.6892],   candidate: "Példa Jelőlt22"},
        {id:23 , city: "Szetlőrinc",      constituency: "választókörzet #23",  slug:"error",    coordinates: [28.9784,41.0082],   candidate: "Példa Jelőlt23"},
        {id:24 , city: "Szigetvár",       constituency: "választókörzet #24",  slug:"error",    coordinates: [3.3792,6.5244],     candidate: "Példa Jelőlt24"},
        {id:25 , city: "Battonya",        constituency: "választókörzet #25",  slug:"error",    coordinates: [114.0579,22.5431],  candidate: "Példa Jelőlt25"},
        {id:26 , city: "Békés",           constituency: "választókörzet #26",  slug:"error",    coordinates: [-43.1729,-22.9068], candidate: "Példa Jelőlt26"},
        {id:27 , city: "Békéscsaba",      constituency: "választókörzet #1",   slug:"babinszki-peter",    coordinates: [21.087731,46.673594],   candidate: "Babinszki Péter"},
        {id:28 , city: "Dévaványa",       constituency: "választókörzet #28",  slug:"error",    coordinates: [117.3616,39.3434],  candidate: "Példa Jelőlt28"},
        {id:29 , city: "Gyomaendrőd",     constituency: "választókörzet #29",  slug:"error",    coordinates: [2.3522,48.8566],    candidate: "Példa Jelőlt29"},
        {id:3 , city: "Újpesten",            constituency: "Budapest 11.",                slug:"paizs-miklos",        coordinates: [19.09131, 47.56489],   candidate: "Paizs Miklós"},
        {id:4 , city: "Budapest XXII. kerület",  constituency: "Budapest 18. ",           slug:"hotz-antal",         coordinates: [19.03167, 47.42500],  candidate: "Hotz Antal"},
        {id:6 , city: "Kőbánya",             constituency: " Budapest 09.",              slug:"savkopo",     coordinates: [19.19860, 47.48127],  candidate: "Savköpő Menyét"},
        {id:7 , city: "Budapest II. keület",        constituency: "Budapest 04.",                slug:"juhasz-veronika",    coordinates: [18.98693, 47.53933],   candidate: "Juhász Veronika"},
        {id:14 , city: "Budapest XI. kerület",    constituency: "Budapest 02.",  slug:"fischer-roland",    coordinates: [19.01874, 47.45931],  candidate: "Fischer Roland"},
        {id:16 , city: "Csepel",            constituency: "Budapest 16.",  slug:"soltesz-szilvia",    coordinates: [19.06614,47.42436],   candidate: "Soltész Szilvia"},
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
