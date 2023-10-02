import Routes from "./routes";
import ReactGA from "react-ga";
// css
import "./styles/index.css";
// carousel css
import "react-multi-carousel/lib/styles.css";
import { Helmet } from "react-helmet";

// gogole analytics
ReactGA.initialize("G-9VQ9ZR56C3");
ReactGA.pageview(window?.location?.pathname + window?.location?.search);
const App = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Connecting Dots From Design to Development"
          data-rh="true"
        />
        <title>GNG innovations</title>
      </Helmet>
      {/* routes */}
      <Routes />
    </div>
  );
};
export default App;
