
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
<<<<<<< HEAD
        <div className='map'><img src={map}></img></div>
{this.state.map.map(
(element) => <div className='map-item' x={element.coorX} y ={element.coorY}>
<div>{element.name}</div>
<div>{element.genre}</div>
</div>
)}

=======
        <div className='map' image={map}></div>
          {this.state.map.map(
            (element) => <div className='map-item' x={element.coorX} y ={element.coorY}>
            <div>{element.name}</div>
            <div>{element.genre}</div>
          </div>)}
>>>>>>> 8f4e59fec8f55a7020b71f83e9ba947383a2fe01
        </div>
    }
}
export default QuestLocation;