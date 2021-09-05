import axios from 'axios';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
// import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'



class InputFeild extends React.Component {



    //onChange event is used to save the values from the input field.
    constructor(props) {
        super(props);
        this.state = {
            cityName: '',

            // the returned data will be saved in the state.
            cityData: {},
            cityImage:'',
        }
    };


    // this handler will take care of changing values.
    cityNameHandeler = (e) => {
        this.setState({
            cityName: e.target.value
        });
    }

    //form event : 
    formSubmit = async (e) => {
        e.preventDefault();
        // ============= Consts ============== 
        //     https://eu1.locationiq.com/v1/search.php?key=       q=${     }&format=json
        const dataUrl = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_IQ_KEY}&q=${this.state.cityName}&format=json`;
        // console.log(url);
        const mapUrl= `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_IQ_KEY}&q=${this.state.cityData.lat,this.state.cityData.long}&zoom=1-18`;

        // ===== sending axios along with the url will send the key and the query parameter.
        const response = await axios.get(dataUrl,mapUrl);
        console.log(response.data[0]);// this line will get the first object that matches the word entered in the field.

        this.setState({
            cityData: response.data[0],
            cityImage: response.data[0],
        });
    }

    // the Form will hold the data , explore button will send the value in the request.
    render() {
        return (
            <div>
                <form onSubmit={this.formSubmit}>
                    <input type='text' onChange={this.cityNameHandeler} placeholder='Enter city name' />
                    <input type='submit' value='Explore' />
                </form>


                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.state.cityImage} />
                        <Card.Body>
                            <Card.Title>City Information :</Card.Title>
                            <Card.Text>
                                {this.state.cityData.display_name}
                            </Card.Text>
                            <Card.Text>
                                lat:{this.state.cityData.lat}
                            </Card.Text>
                            <Card.Text>
                                long:{this.state.cityData.log}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                </div>

                {/* <Form onSubmit={this.formSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>City</Form.Label>
                        <Form.Control type='text' placeholder='Enter city name'  onChange={this.cityNameHandeler} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Explore
                    </Button>
                </Form> */}
            </div>
        );
    }

}

export default InputFeild;