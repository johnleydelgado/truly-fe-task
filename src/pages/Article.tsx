import moment from "moment";
import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface ArticleProps {}

const Article: FC<ArticleProps> = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const article = location.state?.data;

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 min-h-screen">
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md ml-4"
        onClick={handleBack}
      >
        Back
      </button>
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <div className="flex items-center mb-6 not-italic">
              <div className="items-center mr-3 text-sm text-gray-900 dark:text-white">
                <img
                  className="w-full mt-4"
                  src={article.urlToImage}
                  alt={article.title}
                />
                <div className="pt-4">
                  {/* <a
                    href="#"
                    rel="author"
                    className="text-xl font-bold text-gray-500 dark:text-white"
                  >
                    {article.title}
                  </a> */}
                  <p className="text-base font-light text-gray-100 dark:text-gray-100">
                    Author: {article.author || "N/A"}
                  </p>
                  <p className="text-base font-light text-gray-100 dark:text-gray-100">
                    <time dateTime="2022-02-08" title="February 8th, 2022">
                      {moment(article.publishedAt).format("LL")}
                    </time>
                  </p>
                </div>
              </div>
            </div>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
              {article.title}
            </h1>
          </header>
          <p className="lead text-gray-50">
            {article.description}
            interactive elements such as dropdowns, modals, datepickers.
          </p>
          <p className="lead text-gray-50 pt-8">{article.content}</p>
        </article>
      </div>
    </main>
  );
};

export default Article;
