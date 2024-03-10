import React, { useState, useContext } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from "react";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  // props.setProgress(10);
  // document.title =`${ props.category.slice(0, 1).toUpperCase() + props.category.slice(1)} - Newzzy`;

  const UpdateNews = async () => {
    //This will be rendered after after constructor and return method.
    // props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=56012f640a4542079f36dbb42a9abe91&page=1`;
    setLoading(true);
    let data = await fetch(url);
    // props.setProgress(30);
    let parsedData = await data.json();
    // console.log(parsedData);
    // props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    // props.setProgress(100);
  };

  useEffect(() => {
    UpdateNews();
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=56012f640a4542079f36dbb42a9abe91&page=${page+1}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  return (
    <>
      {/* This is a News Based Component */}
      <div className=" font-[Josefin Sans] font-semibold text-white text-4xl mx-40 pt-5 text-center mb-10 ">
        Newzzy: Top{" "} {`${ props.category.slice(0, 1).toUpperCase() + props.category.slice(1) }`} Headlines
      </div>

      <InfiniteScroll dataLength={articles.length !== totalResults} next={fetchMoreData} hasMore={true} loader={loading && <Spinner />}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 700: 2, 1200: 3 }}>
          <Masonry columnsCount={3} gutter="2rem">
            {articles.map((elem, index) => {
              return (
                <NewsItems
                  key={elem.url || index}
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
};
export default News;

News.defaultProps = {
  category: "general",
};

News.propTypes = {
  category: PropTypes.string,
};
