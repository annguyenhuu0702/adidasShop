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
    main: () => <PageHome />,
  },
  {
    path: "/nam",
    exact: false,
    main: () => <PageMan />,
  },
  {
    path: "/nu",
    exact: false,
    main: () => <PageWomen />,
  },
  {
    path: "/tre-em",
    exact: false,
    main: () => <PageChildren />,
  },
  {
    path: "/Jeremy_scott",
    exact: false,
    main: () => <JeremyScott />,
  },
  {
    path: "/Triple_black_collection",
    exact: false,
    main: () => <TripleBlack />,
  },
  {
    path: "/supernova",
    exact: false,
    main: () => <SuperNova />,
  },
  {
    path: "/superstart-giay",
    exact: false,
    main: () => <SuperStart />,
  },
  {
    path: "/adizero-chay",
    exact: false,
    main: () => <Adizero />,
  },
  {
    path: "/manchester_united_fc",
    exact: false,
    main: () => <Manchester />,
  },
  {
    path: "/quan_vot-giay",
    exact: false,
    main: () => <QuanVotGiay />,
  },
  {
    path: "/be",
    exact: false,
    main: () => <Be />,
  },
];

export default routes;
