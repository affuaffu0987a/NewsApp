import React, { Component } from "react";

export class MultiNews extends Component {

  render() {
    const{Img,Title,description, newUrl}=this.props;
    return (
      <div className="card ">
        <img  src={Img?Img:'./R.jpg'} className="card-img-top" alt="..."  />
        <div className="card-body">
          <h5 className="card-title">{description}</h5>
          <p className="card-text">
           {Title}
          </p>
          <a href={newUrl} className="btn btn-dark btn-sm">
            Read more
          </a>
        </div>
      </div>
    );
  }
}

export default MultiNews;
