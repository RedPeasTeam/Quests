import React, {Component} from "react";
import { YMaps, Map } from "react-yandex-maps";

const mapData = {
    center: [53.5439, 27.33 ],
    zoom: 5,
  };

 
  

class QuestLocation extends Component{
    render() {
        return <div className='questLocation'> 
<div className='title'>Quest location</div>
  <YMaps>
    <Map defaultState={mapData} width='900px' height='500px' class='map'>
    </Map>
  </YMaps>
);
        </div>
    }
}


export default QuestLocation;