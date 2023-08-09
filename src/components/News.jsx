import React, { Component } from "react";
import MultiNews from "./MultiNews";
import Loader from "./Loader";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5105ece5d43a43c4b88a4203bdb74c03&page=1&pageSize=${this.props.PageSize}`;
    this.setState({loading:true})
    let respone = await fetch(url);
    let data = await respone.json();
    this.setState({loading : false})
    this.setState({
      articles: data.articles,
      totalResults: data.totalResults,
    });
  }
  GoPrivious = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5105ece5d43a43c4b88a4203bdb74c03&page=${
      this.state.page - 1
    }&pageSize=${this.props.PageSize}`;
    this.setState({loading:true})
    let respone = await fetch(url);
    let data = await respone.json();
    this.setState({loading : false})
    this.setState({
      articles: data.articles,
      page: this.state.page - 1,
    });
  };
  GoNext = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.PageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5105ece5d43a43c4b88a4203bdb74c03&page=${
        this.state.page + 1
      }&pageSize=${this.props.PageSize}`;
      this.setState({loading:true})
      let respone = await fetch(url);
      let data = await respone.json();
      this.setState({loading : false})
      this.setState({
        articles: data.articles,
        page: this.state.page + 1,
      });
    }
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center" style={{marginTop:"7rem",marginBottom:"3rem",fontSize:"3.5rem"}}>fatafatNews-Top Headlines</h2>
          {this.state.loading?<Loader/>:null}
          <div className="row">
            {this.state.articles.map((curEle, index) => {
              const { urlToImage, title, description, url } = curEle;
              return (
                <div className="col-md-4" key={index}>
                  <MultiNews
                    Img={urlToImage}
                    Title={title}
                    description={description}
                    newUrl={url}
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-around">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-outline-dark btn-sm"
            onClick={this.GoPrivious}
          >
            &#8592;Privious
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.PageSize)
            }
            type="button"
            className="btn btn-dark btn-sm"
            onClick={this.GoNext}
          >
            Next&#8594;
          </button>
        </div>
        </div>
      </>
    );
  }
}

export default News;
