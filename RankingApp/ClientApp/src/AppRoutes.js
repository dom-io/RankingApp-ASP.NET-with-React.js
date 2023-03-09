import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import RankItemsContainer from "./components/RankItemsContainer";

const AppRoutes = [
  //{
  //  index: true,
  //  element: <Home />
  //},
  //{
  //  path: '/counter',
  //  element: <Counter />
  //},
  //{
  //  path: '/fetch-data',
  //  element: <FetchData />
  //},
    {
        index: true,
        path: '/',
        element: <RankItemsContainer dataType={1} />
    },
    {
        path: '/rank-ablums',
        element: <RankItemsContainer dataType={2} />
    }
];

export default AppRoutes;
