import React, { Component } from "react";
import MultiNews from "./MultiNews";
import Loader from "./Loader";
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps={
    country: 'in',
    pageSize: 8,
    category: "general"
  }
  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title=`${this.props.category}-FatafatNews`
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5105ece5d43a43c4b88a4203bdb74c03&page=1&pageSize=${this.props.PageSize}`;
    this.setState({loading:true})
    let respone = await fetch(url);
    let data = await respone.json();
    console.log(data);
    this.setState({loading : false})
    this.setState({
      articles: data.articles,
      totalResults: data.totalResults,
    });
  }
  GoPrivious = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey==${this.props.country}&apiKey=5105ece5d43a43c4b88a4203bdb74c03&page=${
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
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5105ece5d43a43c4b88a4203bdb74c03&page=${
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
              const { urlToImage, title, description, url, author, publishedAt} = curEle;
              return (
                <div className="col-md-4" key={index}>
                  <MultiNews
                    Img={urlToImage}
                    // Source={source.name}
                    Title={title}
                    description={description}
                    Author={author}
                    Dates={publishedAt}
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
