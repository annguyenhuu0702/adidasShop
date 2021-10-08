import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";

function App() {
  const showContentMenus = () => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        {showContentMenus(routes)}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
