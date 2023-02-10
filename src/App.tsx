import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import Article from "./pages/Article";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import { persistor, store } from "./redux/store";

function App() {
  const client = new QueryClient();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
}

export default App;
