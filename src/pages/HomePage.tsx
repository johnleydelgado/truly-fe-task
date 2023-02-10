import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Card from "../common/components/Card";
import LoadMoreButton from "../common/components/LoadMoreBtn";
import useGetNews from "../common/hooks/useGetNews";
import { CommonState, setSearchTerm } from "../redux/common";
import { RootState } from "../redux/store";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  const [pageSize, setPageSize] = useState(20);
  const { searchTerm } = useSelector<RootState, CommonState>(
    (state: any) => state.common
  );

  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { data, status } = useGetNews({ pageSize });

  if (status === "error") {
    return <div>Error: {data.message}</div>;
  }

  const loadMore = () => {
    setPageSize(pageSize + 20);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigation("/search", { state: { searchTerm } });
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="flex justify-between items-center p-4 bg-gray-900 text-white px-96">
        <div className="font-bold text-xl">Search News</div>
        <div className="relative">
          <form onSubmit={handleSubmit} className="flex items-center">
            <input
              type="text"
              className="w-64 p-2 bg-gray-800 text-white rounded-full"
              placeholder="Search news..."
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            />
          </form>
        </div>
      </div>
      <main className="container mx-auto px-4 py-6">
        <div className="container mx-auto flex flex-col space-y-10">
          {data?.articles?.length &&
            data.articles.map((article: any) => (
              <Card article={article} key={article.title + Math.random()} />
            ))}
        </div>

        <LoadMoreButton onClick={loadMore} isLoading={status === "loading"} />
      </main>
      <footer className="bg-white py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600">&copy;2023 News</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
