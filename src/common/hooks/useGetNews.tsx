import axios from "axios";
import { useQuery } from "react-query";

interface News {
  pageSize: number;
}

const useGetNews = (news: News) => {
  const { pageSize } = news;
  const { data, status, isFetching } = useQuery(
    ["articles", pageSize],
    async () => {
      const url =
        "https://newsapi.org/v2/top-headlines?country=us&" +
        "apiKey=acbabd0944f44430b664d4ed12d93e7b";
      try {
        const response = await axios.get(`${url}&pageSize=${pageSize}`);
        return response.data;
      } catch (error: any) {
        return { status: "error", message: error.message };
      } finally {
      }
    }
  );

  return { data, status, isFetching };
};

export default useGetNews;
