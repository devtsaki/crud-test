import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "features/home/screens/Home";
import NotFound from "common/screens/NotFound";
import Layout from "common/components/Layout";

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Router;
