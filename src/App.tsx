import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Article from "./pages/Article";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article" element={<Article />} />
          <Route path="/search" element={<SearchPage />} />

          {/* <Route path="/about" element={<} /> */}
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
