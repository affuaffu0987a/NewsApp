import React, { Component } from "react";

export class MultiNews extends Component {

  render() {
    const{Img,Title,description, newUrl,Author,Dates}=this.props;
    return (
      <div className="card ">
        <img  src={Img?Img:'./R.jpg'} className="card-img-top" alt="..."  />
        <div className="card-body">
          {/* <p>{Source? Source:"Unknown"}</p> */}
          <h5 className="card-title">{description}</h5>
          <p className="card-text">
           {Title}
          </p>
          <p className="authorName">By {Author? Author:"Unknown"} On {new Date(Dates).toLocaleString()}</p>
          <a href={newUrl} className="btn btn-dark btn-sm">
            Read more
          </a>
        </div>
      </div>
    );
  }
}

export default MultiNews;
