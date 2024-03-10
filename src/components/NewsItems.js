import React from "react";
import Button from "./button";

const NewsItems = (props) =>{
    let { title, description, imageurl, newsurl, author, publishedAt } =  props;
    return (
      <>
        <div className="flex flex-col mx-auto w-96 overflow-hidden rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <div className="inline-flex items-center justify-center w-full h-full px-3 py-1 text-sm font-medium rounded-xl bg-gray-950 text-gray-50 backdrop-blur-3xl">
            <div className="flex flex-col h-auto mx-auto text-gray-700 shadow-md w-96 rounded-xl bg-clip-border">
              <div className="relative h-56 mx-4 mt-6 text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img
                  src={imageurl}
                  alt="img-blur-shadow"
                  className="z-50 h-56 w-96"
                />
              </div>
              <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-white">
                  {title}
                </h5>
                <p className="block font-sans antialiased font-light leading-relaxed text-gray-400 text-inherit">
                  {description}
                </p>
                <p className="block pt-4 font-sans text-xs antialiased font-light leading-relaxed text-gray-500 text-inherit">
                  By {author} On {new Date(publishedAt).toGMTString()}
                </p>
              </div>
              <div className="p-6 pt-0">
                <a href={newsurl} target="_blank" rel="noreferrer">
                  <Button />
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}


export default NewsItems;
