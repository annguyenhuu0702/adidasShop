import PageHome from "./containers/PageHome/PageHome";
import PageMan from "./containers/PageMan/PageMan";
import PageWomen from "./containers/PageWomen/PageWomen";
import PageChildren from "./containers/PageChildren/PageChildren";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <PageHome />,
  },
  {
    path: "/nam",
    exact: false,
    main: ({ match, history }) => <PageMan />,
  },
  {
    path: "/nu",
    exact: false,
    main: ({ match, history }) => <PageWomen />,
  },
  {
    path: "/tre-em",
    exact: false,
    main: ({ match, history }) => <PageChildren />,
  },
];

export default routes;
