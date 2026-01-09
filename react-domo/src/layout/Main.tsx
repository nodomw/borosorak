import { Routes, Route } from "react-router-dom";
import List from "../pages/List";
import Detail from "../pages/Detail";
import Error from "../pages/Error";
import Admin from "../pages/Admin";
import AdminLogin from "../pages/AdminLogin";
import Search from "../pages/Search";
import Home from "../pages/Home";

const Main = () => {
  return (
    <main className="container mt-3">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error />} />
        <Route
          path="/receptek"
          element={<List />}
        />
        <Route
          path="/receptek/:id"
          element={<Detail />}
        />
        <Route
          path="/kereses"
          element={<Search />}
        />
        <Route
          path="/admin"
          element={<Admin />}
        />
        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />
      </Routes>
    </main>
  );
};
export default Main;
