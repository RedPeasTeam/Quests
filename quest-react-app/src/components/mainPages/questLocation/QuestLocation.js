import map from '../../../img/map.jpg';
import React, {Component} from 'react';
import * as Api from 'typescript-fetch-api'

const api = new Api.DefaultApi()  


class QuestLocation extends Component{

  constructor(props) {
    super(props);
    this.state = {map: []};
    this.handleReload()
 }

 async handleReload() {
  const response = await api.map({ date: '' });
  this.setState({ map: response });
}
    render() {
        return <div className='questLocation'> 
        <div className='map'><img src={map}></img></div>
{this.state.map.map(
(element) => <div className='map-item' x={coorX} y ={coorY}>
<div>{element.name}</div>
<div>{element.genre}</div>
</div>
)}

        </div>
    }
}


export default QuestLocation;