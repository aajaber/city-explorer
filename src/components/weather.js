import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

class Weather extends React.Component {
  render() {
    return (
      <div>
        <Card
          style={{
            width: "30rem",
            border: "solid",
          }}
        >
          <Card.Body
            style={{
              color: "black",
            }}
          >
            <Card.Title>
              {" "}
              Display Name :{this.props.cityData.display_name}
            </Card.Title>
            <Card.Text>latitude : {this.props.cityData.lat}</Card.Text>
            <Card.Text>longitude : {this.props.cityData.lon}</Card.Text>
            <Card.Text> City Info :</Card.Text>
            {this.props.cityInfo.map((e) => {
              return (
                <Card.Text>
                  {e.date} {e.description}
                </Card.Text>
              );
            })}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Weather;
