import React from 'react';
import Layout from '../components/Layout';
import Home from '../components/Home';
import Search from '../components/Search';
import { Map, Marker, Popup, TileLayer} from 'react-leaflet-universal';



export default class IndexPage extends React.Component {

  constructor() {

    super();

  }

  renderLeaflet() {
    const position = [51.505, -0.09]
    return(
      <Map center={position} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
      </Map>
    )
  }
  render() {

    return (
      <Layout>
        <div className="container">
          <div className="wrapper">
            <div className="map">
              {this.renderLeaflet()}
            </div>
            <Search />
          </div>
        </div>
        
      </Layout>
    );

  }

}
