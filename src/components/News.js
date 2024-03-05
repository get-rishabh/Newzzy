import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class extends Component {
  static defaultProps = {
    category: "general",
  };

  static propTypes = {
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    console.log("Hi, I'm a Constructor !!!");
    this.state = {
      articles: [],
      loading: false,
      page : 1,
      totalResults : 0
    };
    document.title = `${
      this.props.category.slice(0, 1).toUpperCase() +
      this.props.category.slice(1)
    } - Newzzy`;
  }

  async componentDidMount() {
    //This will be rendered after after constructor and return method.
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=56012f640a4542079f36dbb42a9abe91&page=1`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ 
      articles: parsedData.articles,
      totalResults : parsedData.totalResults,
      loading : false
    });
  }


  fetchMoreData = async() => {
    this.setState({page : this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=56012f640a4542079f36dbb42a9abe91&page=1`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({ 
      articles: this.state.articles.concat(parsedData.articles),
      totalResults : parsedData.totalResults,
      loading : false
    });
  };

  render() {
    return (
      <>
        {/* This is a News Based Component */}
        <div className=" font-[Josefin Sans] font-semibold text-white text-4xl mx-40 pt-5 text-center mb-10 ">
          Newzzy: Top{" "}
          {`${
            this.props.category.slice(0, 1).toUpperCase() +
            this.props.category.slice(1)
          } `}Headlines
          {/* <Spinner /> */}
        </div>

        <InfiniteScroll
          dataLength={this.state.articles.length !== this.state.totalResults}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<Spinner />}
        >
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 300: 1, 700: 2, 1200: 3 }}
          >
            <Masonry columnsCount={3} gutter="2rem">
              {this.state.articles.map((elem) => {
                return (
                  <NewsItems
                    key={elem.url}
                    title={elem.title ? elem.title.slice(0, 48) : "No Title"}
                    description={
                      elem.description ? elem.description : "No Description"
                    }
                    newsurl={elem.url}
                    imageurl={
                      elem.urlToImage
                        ? elem.urlToImage
                        : "https://help.nextcloud.com/uploads/default/original/3X/e/0/e0d3dce7ac5527c8f6dfa1590c75a72dd951e540.png"
                    }
                    author={!elem.author ? "Unknown" : elem.author}
                    publishedAt={elem.publishedAt}
                  />
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        </InfiniteScroll>
      </>
    );
  }
}
