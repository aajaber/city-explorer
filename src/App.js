import "./App.css";
import axios from "axios";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
      cityData: {},
      displayed: false,
      errormessege: false,
      errorWarning: "",
      errorName: "",
      weatherList: [],
    };
  }

  formSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      displayed: true,
    });
    const dataUrl = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_IQ_KEY}&q=${this.state.cityName}&format=json`;
    try {
      const WeatherUrl = `${process.env.REACT_APP_SERVER_URL}/weather`;

      let dataResponse = await axios.get(dataUrl);
      let weatherDataResponse = await axios.get(WeatherUrl);

      this.setState({
        cityData: dataResponse.data[0],
        weatherList: weatherDataResponse.data[0],
        displayed: true,
      });
    } catch (error) {
      if (this.state.cityName) {
        this.setState({
          errormessege: true,
          errorName: error.message,
          errorWarning: "Enter a city name within your zone",
          data: "",
          cityName: "",
        });
      } else {
        this.setState({
          errormessege: true,

          errorName: error.message,
          errorWarning: "City name field is required",
          data: "",
          cityName: "",
        });
      }
    }
  };

  cityNameHandeler = (event) => {
    if (event.target.value) {
      this.setState({
        cityName: event.target.value,
      });
    } else {
      this.setState({
        errormessege: true,
        cityName: "",
      });
    }
  };

  render() {
    const mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_IQ_KEY}&center=31.9515694,35.9239625`;

    // const mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_IQ_KEY}&center={$},{$}`;

    return (
      <div>
        <h1 style={{ textAlign: "center" }}>City Explorer</h1>

        <Form onSubmit={this.formSubmit}>
          <Form.Control
            type="text"
            placeholder="Enter City Name"
            onChange={this.cityNameHandeler}
          />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <p style={{ textAlign: "center" }}>
          {this.state.cityData.display_name}
        </p>
        <p style={{ textAlign: "center" }}>{this.state.cityData.lat}</p>
        <p style={{ textAlign: "center" }}>{this.state.cityData.lon}</p>
        {this.state.displayed && <img src={mapUrl} alt="map" />}
        {this.state.errormessege && <p>Faild to load Data !</p>}

        <div>
          {this.state.weatherList.map((item) => {
            return (
              <div>
                <p>{item.data[0].valid_date}</p>
                <p>{item.data[0].weather.description}</p>
                <p>{item.data[0].app_max_temp}</p>
                <p>{item.data[0].app_min_temp}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default App;
