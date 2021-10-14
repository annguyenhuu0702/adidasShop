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
import MenShoes from "./containers/MenShoes/Menshoes";
import MenClothes from "./containers/MenClothes/MenClothes";
import MenAccessories from "./containers/MenAccessories/MenAccessories";
import ProductMen from "./containers/AProductMen/ProductMen";
import WomenShoes from "./containers/WomenShoes/WomenShoes";
import WomenClothes from "./containers/WomenClothes/WomenClothes";
import WomenAccessories from "./containers/WomenAccessories/WomenAccessories";
import ProductWomen from "./containers/AProductWomen/ProductWomen";
import ChildrenShoes from "./containers/ChildrenShoes/ChildrenShoes";
import ChildrenClothes from "./containers/ChildrenClothes/ChildrenClothes";
import ChildrenAccessories from "./containers/ChildrenAccessories/ChildrenAccessories";
import ProductChildren from "./containers/AProductChildren/ProductChildren";
import ProductDetail from "./containers/ProductDetail/ProductDetail";
import Cart from "./containers/Cart/Cart";

const routes = [
  {
    path: "/",
    exact: true,
    main: ({ match, history }) => <PageHome match={match} history={history} />,
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
  {
    path: "/giay-nam",
    exact: false,
    main: ({ match, history }) => <MenShoes match={match} history={history} />,
  },
  {
    path: "/quan-ao-nam",
    exact: false,
    main: ({ match, history }) => (
      <MenClothes match={match} history={history} />
    ),
  },
  {
    path: "/phu-kien-nam",
    exact: false,
    main: ({ match, history }) => (
      <MenAccessories match={match} history={history} />
    ),
  },
  {
    path: "/san-pham-nam",
    exact: false,
    main: ({ match, history }) => (
      <ProductMen match={match} history={history} />
    ),
  },
  {
    path: "/giay-nu",
    exact: false,
    main: ({ match, history }) => (
      <WomenShoes match={match} history={history} />
    ),
  },
  {
    path: "/quan-ao-nu",
    exact: false,
    main: ({ match, history }) => (
      <WomenClothes match={match} history={history} />
    ),
  },
  {
    path: "/phu-kien-nu",
    exact: false,
    main: ({ match, history }) => (
      <WomenAccessories match={match} history={history} />
    ),
  },
  {
    path: "/san-pham-nu",
    exact: false,
    main: ({ match, history }) => (
      <ProductWomen match={match} history={history} />
    ),
  },
  {
    path: "/giay-tre-em",
    exact: false,
    main: ({ match, history }) => (
      <ChildrenShoes match={match} history={history} />
    ),
  },
  {
    path: "/quan-ao-tre-em",
    exact: false,
    main: ({ match, history }) => (
      <ChildrenClothes match={match} history={history} />
    ),
  },
  {
    path: "/phu-kien-tre-em",
    exact: false,
    main: ({ match, history }) => (
      <ChildrenAccessories match={match} history={history} />
    ),
  },
  {
    path: "/san-pham-tre-em",
    exact: false,
    main: ({ match, history }) => (
      <ProductChildren match={match} history={history} />
    ),
  },
  {
    path: "/product/:productId",
    exact: false,
    main: ({ match, history }) => (
      <ProductDetail match={match} history={history} />
    ),
  },
  {
    path: "/cart",
    exact: false,
    main: ({ match, history }) => <Cart />,
  },
];

export default routes;
