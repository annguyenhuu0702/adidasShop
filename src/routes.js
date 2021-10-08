import PageHome from "./containers/PageHome/PageHome";
import PageMan from "./containers/PageMan/PageMan";
import PageWomen from "./containers/PageWomen/PageWomen";
import PageChildren from "./containers/PageChildren/PageChildren";
import Adizero from "./containers/Adizero/Adizero";
import Be from "./containers/Be/Be";
import JeremyScott from "./containers/JeremyScott/JeremyScott";
import Manchester from "./containers/Manchester/Manchester";
import QuanVotGiay from "./containers/QuanVotGiay/QuanVotGiay";
import SuperNova from "./containers/SuperNova/SuperNova";
import SuperStart from "./containers/SuperStart/SuperStart";
import TripleBlack from "./containers/TripleBlack/TripleBlack";

const routes = [
  {
    path: "/",
    exact: true,
    main: ({ match, history }) => <PageHome />,
  },
  {
    path: "/nam",
    exact: false,
    main: ({ match, history }) => <PageMan match={match} history={history} />,
  },
  {
    path: "/nu",
    exact: false,
    main: ({ match, history }) => <PageWomen match={match} history={history} />,
  },
  {
    path: "/tre-em",
    exact: false,
    main: ({ match, history }) => (
      <PageChildren match={match} history={history} />
    ),
  },
  {
    path: "/Jeremy_scott",
    exact: false,
    main: ({ match, history }) => (
      <JeremyScott match={match} history={history} />
    ),
  },
  {
    path: "/Triple_black_collection",
    exact: false,
    main: ({ match, history }) => (
      <TripleBlack match={match} history={history} />
    ),
  },
  {
    path: "/supernova",
    exact: false,
    main: ({ match, history }) => <SuperNova match={match} history={history} />,
  },
  {
    path: "/superstart-giay",
    exact: false,
    main: ({ match, history }) => (
      <SuperStart match={match} history={history} />
    ),
  },
  {
    path: "/adizero-chay",
    exact: false,
    main: ({ match, history }) => <Adizero match={match} history={history} />,
  },
  {
    path: "/manchester_united_fc",
    exact: false,
    main: ({ match, history }) => (
      <Manchester match={match} history={history} />
    ),
  },
  {
    path: "/quan_vot-giay",
    exact: false,
    main: ({ match, history }) => (
      <QuanVotGiay match={match} history={history} />
    ),
  },
  {
    path: "/be",
    exact: false,
    main: ({ match, history }) => <Be match={match} history={history} />,
  },
];

export default routes;
