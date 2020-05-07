import React from 'react';
import Layout from '../components/Layout';
import Search from '../components/Search';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet-universal';
import Typewriter from 'typewriter-effect';




export default class IndexPage extends React.Component {

  constructor() {
    super();
    this.state = {
      geoCoord: []
    }
  }

  componentDidMount() {
    this.getGeoData()
  }

  getGeoData() {
    fetch('/api')
      .then((data) => data.json())
      .then((data) => {
        console.log(data)
        this.setState({
          geoCoord: data.data
        })
      })
  }

  renderLeaflet() {
    const geoCoords = this.state.geoCoord;
    return (
      <Map center={position} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {geoCoords.map((coords) => (
          <Marker position={coords} />
        ))}
      </Map>
    )
  }
  render() {

    return (
      <Layout>
        <div className="container">
          <div className="wrapperIndex">
            <Typewriter
              options={{
                strings: ['Type in address', 'or street name', 'or zip code', 'or just watch me type!'],
                autoStart: true,
                loop: true
              }}
            />
            <Search />
            <div className="map">
              {this.renderLeaflet()}
            </div>

          </div>

        </div>

      </Layout>
    );

  }

}
