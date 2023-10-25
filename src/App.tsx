import { QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";
import { queryClient } from "./services/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
