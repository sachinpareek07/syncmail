import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import List from "../pages/users/List";
import ClientList from "../pages/clients/List";
import EmailList from "../pages/inbox/List";
import Single from "../pages/single/Single";
import New from "../pages/new/New";
import CategoryList from "../pages/categories/List"
import { productInputs, userInputs } from "../formSource";
import UnProtectedLayout from "./layout/UnProtectedLayout";
import ProtectedLayout from "./layout/ProtectedLayout";
import ComposeMail from "../pages/composeMail";
import Settings from "../pages/settings";

const SiteRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UnProtectedLayout />}>
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/" element={<ProtectedLayout />}>
          <Route index element={<Home />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={productInputs} title="Add New Product" />}
            />
          </Route>
          <Route path="categories">
            <Route index element={<CategoryList />} />
            <Route path=":categoryId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={productInputs} title="Add New Product" />}
            />
          </Route>
          <Route path="compose">
            <Route index element={<ComposeMail />} />
          </Route>
          <Route path="clients">
            <Route index element={<ClientList />} />
          </Route>
          <Route path="inbox">
            <Route index element={<EmailList />} />
          </Route>
          <Route path="settings">
            <Route index element={<Settings />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default SiteRoutes;
