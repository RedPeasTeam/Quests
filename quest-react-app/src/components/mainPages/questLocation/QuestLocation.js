
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
        <div className='map' style={{background: `url(${map})`}}>
            {this.state.map.map(
              (element) => 
              <div className='map-item' style = {{position:"absolute", top:`${element.coorY}%`, left:`${element.coorX}%`}}>
              <div>{element.name}</div>
              <div>{element.genre}</div>
            </div>)}
          </div>
        </div>
    }
}
export default QuestLocation;