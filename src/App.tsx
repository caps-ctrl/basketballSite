import { BrowserRouter, useRoutes } from "react-router-dom";
import Home from "./Pages/Home";
import RootLayout from "./Layout/RootLayout";

import AboutUs from "./Pages/AboutUs";

const AppRoutes = () => {
  const routes = [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "About%20us",
          element: <AboutUs />,
        },
      ],
    },
  ];

  return useRoutes(routes);
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
