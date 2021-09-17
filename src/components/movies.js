import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

class Movies extends React.Component {
  render() {
    return (
      <>
        {this.props.cityMoviesInfo.map((e) => {
          return (
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
                <Card.Title>Movie</Card.Title>
                <Card.Text>{e.title}</Card.Text>
                <Card.Text>{e.overview}</Card.Text>
                <Card.Text>{e.vote}</Card.Text>
                <Card.Text>{e.count}</Card.Text>
                <Card.Text>{e.release_date}</Card.Text>
                <Card.Text>{e.popularity}</Card.Text>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500${e.img}`}
                  alt={e.title}
                />
              </Card.Body>
            </Card>
          );
        })}
      </>
    );
  }
}

export default Movies;
