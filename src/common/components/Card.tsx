import React from "react";
import { Link } from "react-router-dom";

interface Article {
  urlToImage: any;
  title: any;
  description: any;
  source: any;
  author: any;
  publishedAt: any;
}

interface Obj {
  article: Article;
}

const Card = (obj: Obj) => {
  const { article } = obj;
  return (
    <div className="container mt-2 mx-auto p-4 md:p-0">
      <div className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto lg:h-80">
        <div
          className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative"
          style={{ backgroundImage: `url(${article.urlToImage})` }}
        >
          <div className="absolute text-xl">
            <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer" />
          </div>
        </div>

        <div className="bg-gray-200 w-full md:w-2/3">
          <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
            <div className="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
              <div className="w-full lg:w-3/5 lg:px-3">
                <h3 className="font-semibold text-lg leading-tight pb-4">
                  {article.title}
                </h3>
                <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                  {article.description}
                </p>
              </div>

              <div className="flex justify-end px-6 py-4">
                <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <Link to="/article" state={{ data: article }}>
                    Read Full Article
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
