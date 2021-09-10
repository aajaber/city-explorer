import './App.css';
import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {

      cityName: '',
      cityData: '',
      displayed: false,
      errormessege: false

    }
  }

  
  formSubmit = async (e) => {
    e.preventDefault();
    const dataUrl = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_IQ_KEY}&q=${this.state.cityName}&format=json`;
    try {

      let locresult = await axios.get(dataUrl);


      this.setState({
        cityData: locresult.data[0],
        displayed: true

      })
    }
    catch {
      this.setState({
        displayed: false,
        errormessege: true
      })
    }
  }

  
  cityNameHandeler = (event) => {
    this.setState({
      cityName: event.target.value
    })
  }

  render() {
    const mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_IQ_KEY}&q=${this.state.cityData.lat, this.state.cityData.long}&zoom=1-18`;

    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>City Explorer</h1>

        <Form onSubmit={this.formSubmit}>
          <Form.Control type="text" placeholder="Enter City Name" onChange={this.cityNameHandeler} />
          <Button variant="primary" type="submit">Submit</Button>
        </Form>

        <p style={{ textAlign: 'center' }}>{this.state.cityData.display_name}</p>
        <p style={{ textAlign: 'center' }}>{this.state.cityData.lat}</p>
        <p style={{ textAlign: 'center' }}>{this.state.cityData.lon}</p>
        {
          this.state.displayed && <img src={mapUrl}
            alt='map'
          />

        }
        {
          this.state.errormessege &&
          <p >Faild to load Data !</p>
        }
      </div>
    );
  }

}
export default App;