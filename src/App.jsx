import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./ui/Loading";

const CountryList = lazy(() => import("./Pages/CountryList"));
const CountryPage = lazy(() => import("./Pages/CountryPage"));
const AppLayout = lazy(() => import("./ui/AppLayout"));

function App() {
  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<CountryList />} />
          <Route path="country/" element={<CountryPage />} />
        </Route>
        <Route path="*" element={<p>page not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
