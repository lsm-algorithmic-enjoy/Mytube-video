import { Outlet } from "react-router-dom";
import SearchHeader from "./components/SearchHeader";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { YoutubeApiProvider } from "./context/YoutubeApiProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <SearchHeader />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}

export default App;
