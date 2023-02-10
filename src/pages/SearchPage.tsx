import { isEmpty } from "lodash";
import React, { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Card from "../common/components/Card";
import LoadMoreButton from "../common/components/LoadMoreBtn";
import Loading from "../common/components/Loading";
import useSearchNews from "../common/hooks/useSearchNews";
interface SearchPageProps {}

const SearchPage: FC<SearchPageProps> = () => {
  const navigate = useNavigate();

  const [pageSize, setPageSize] = useState(20);
  const location = useLocation();
  const [sortBy, setSortBy] = useState("popularity");
  const [searchTerm, setSearchTerm] = useState(location.state.searchTerm);
  const { data, status, isRefetching, isLoading, refetch } = useSearchNews({
    search: searchTerm,
    sortBy,
  });

  if (status === "error") {
    return <div>Error: {data.message}</div>;
  }

  const loadMore = () => {
    setPageSize(pageSize + 20);
  };

  const handleChange = (event: any) => {
    setSortBy(event.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    refetch();
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="flex items-center p-4 bg-gray-900 text-white px-96 space-x-16">
        <div className="font-bold text-xl cursor-pointer" onClick={handleBack}>
          Homepage
        </div>
        <div className="relative" />
      </div>
      <main className="container mx-auto px-4 py-6">
        <div className="flex items-stretch pb-6 space-x-4">
          <p className="px-4 py-2">Sort By: </p>
          <select
            className="appearance-none w-1/6 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => handleChange(e)}
          >
            <option>Popularity</option>
            <option>Relevance</option>
            <option>Published Date</option>
          </select>
          <form onSubmit={handleSubmit} className="flex items-center">
            <input
              type="text"
              className="w-64 p-2 bg-white text-black rounded-sm"
              placeholder="Search news..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </div>
        <div className="container mx-auto flex flex-col space-y-10">
          {isLoading || status === "loading" || isRefetching ? (
            <Loading />
          ) : data?.articles?.length ? (
            data?.articles.map((article: any) => (
              <Card article={article} key={article.title + Math.random()} />
            ))
          ) : null}
        </div>

        {data?.articles?.length && (
          <LoadMoreButton onClick={loadMore} isLoading={isRefetching} />
        )}
      </main>
      {data?.articles?.length && (
        <footer className="bg-white py-6">
          <div className="container mx-auto px-4">
            <p className="text-center text-gray-600">&copy;2023 News</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default SearchPage;
