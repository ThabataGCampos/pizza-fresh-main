import { Routes, Route } from "react-router-dom";
import { RoutePath } from "types/routes";
import Home from "pages/Home/index";
import Login from "pages/Login";
import ManageProducts from "components/ManageProducts";
import ManageUsers from "components/ManageUsers";
import Settings from "pages/Settings";
import ManageTables from "components/ManageTables";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.LOGIN} element={<Login />} />
      <Route path={RoutePath.HOME} element={<Home />} />
      <Route path={RoutePath.SETTINGS} element={<Settings />}>
        <Route path={RoutePath.SETTINGS_TABLES} element={<ManageTables />} />
        <Route
          path={RoutePath.SETTINGS_PRODUCTS}
          element={<ManageProducts />}
        />
        <Route path={RoutePath.SETTINGS_USERS} element={<ManageUsers />} />
      </Route>
    </Routes>
  );
};

export default Router;
