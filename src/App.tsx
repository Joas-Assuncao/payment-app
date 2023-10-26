import { Toaster } from "react-hot-toast";
import { QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Router } from "./routes";
import { queryClient } from "./services/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Router />
        <Toaster position="top-center" reverseOrder={false} />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
