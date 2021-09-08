// import axios from 'axios';
// import React from 'react';

// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'
// import 'bootstrap/dist/css/bootstrap.min.css';



// class InputFeild extends React.Component {



//     //onChange event is used to save the values from the input field.
//     constructor(props) {
//         super(props);
//         this.state = {
//             cityName: '',

//             // the returned data will be saved in the state.
//             cityData: {},
//             cityImage: '',
//             cityWeather: '',
//             cityWeatherDescription: '',
//         }
//     };


//     //form event : 
//     formSubmit = async (e) => {
//         e.preventDefault();

//         try {

//             // ============= Consts ============== 


//             //     https://eu1.locationiq.com/v1/search.php?key=       q=${     }&format=json
//             const dataUrl = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_IQ_KEY}&q=${this.state.cityName}&format=json`;
//             // console.log(url);
//             const dataResponse = await axios.get(dataUrl);

//             const wethearUrl = await `${process.env.REACT_APP_SERVER_URI}/get-wethear?city_name=${this.state.cityName}`;
//             const weatherResponse = await axios.get(wethearUrl);

//             const cityWeatherDescription = weatherResponse.data[0].weather.description;
//             // console.log(cityWeatherDescription);
//             const centerKey = this.state.cityData.lat + "," + this.state.cityData.lon;

//             const mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_IQ_KEY}&center=${centerKey}&zoom="5"&format=json`


//             //================= NAME, LAT , LONG & WEATHER.
//             await this.setState({
//                 cityData: dataResponse.data[0],
//                 cityWeather: weatherResponse.data[0],
//             });
//             //=============================== MAP IMAGE
//             this.setState({
//                 cityImage: mapUrl
//             })
//         }
//         catch (fail) {
//             this.setState({
//                 fail: true,
//             });
//         }
//     }

//     // the Form will hold the data , explore button will send the value in the request.
//     render() {
//         return (
//             <div>

//                 <Form className='form' onSubmit={this.formSubmit}>
//                     <Form.Group className="mb-3" controlId="place" >
//                         <Form.Control type="text" onChange={this.cityNameHandeler} placeholder='Enter city name' />
//                         <Button variant="primary" type="Explorer">
//                             Explorer
//                         </Button>
//                     </Form.Group>
//                 </Form>


//                 <Card style={{ width: '80rem', color: 'red' }}>
//                     <Card.Img variant="top" src={this.state.cityImage} />
//                     <Card.Body>
//                         <Card.Title>City Information :</Card.Title>
//                         <Card.Text>
//                             {this.state.cityData.display_name}
//                         </Card.Text>
//                         <Card.Text>
//                             lat:{this.state.cityData.lat}
//                         </Card.Text>
//                         <Card.Text>
//                             long:{this.state.cityData.log}
//                         </Card.Text>
//                     </Card.Body>
//                 </Card>



//                 {/* <form onSubmit={this.formSubmit}>
//                     <input type='text' onChange={this.cityNameHandeler} placeholder='Enter city name' />
//                     <input type='submit' value='Explore' />
//                 </form> */}



//             </div>
//         );
//     }

// }

// export default InputFeild;