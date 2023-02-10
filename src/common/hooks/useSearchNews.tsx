import axios from "axios";
import moment from "moment";
import { useQuery } from "react-query";

interface News {
  search: string;
  sortBy?: string;
}

const useSearchNews = (news: News) => {
  const { search, sortBy } = news;
  const date = moment().format("YYYY-MM-DD");
  const { data, status, isFetching, isLoading, refetch, isRefetching } =
    useQuery(["search", sortBy], async () => {
      const url =
        "https://newsapi.org/v2/everything?" +
        `from=${date}&to=${date}&` +
        "apiKey=acbabd0944f44430b664d4ed12d93e7b";
      try {
        const response = await axios.get(`${url}&q=${search}&sortBy=${sortBy}`);
        return response.data;
      } catch (error: any) {
        return { status: "error", message: error.message };
      } finally {
      }
    });

  return { data, status, isFetching, isLoading, refetch, isRefetching };
};

export default useSearchNews;
