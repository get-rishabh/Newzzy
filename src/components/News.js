import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default class extends Component {
  constructor() {
    super();
    console.log("Hi, I'm a Constructor !!!");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    //This will be rendered after after constructor and return method.
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=56012f640a4542079f36dbb42a9abe91&page=1";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <>
        {/* This is a News Based Component */}
        <div className=" font-[Josefin Sans] font-semibold text-4xl mx-40 pt-5 text-center mb-10 ">
          Newzzy: Your One-Stop Solution to News
          {/* <Spinner /> */}
        </div>

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
                />
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </>
    );
  }
}
