import ReactGA from "react-ga";

export const GA_ID = "";

let initialized = false;

export const initGa = () => {
  if (!initialized) {
    ReactGA.initialize(GA_ID);
    initialized = true;
  }
};

export const trackPage = (location: string = window.location.pathname) => {
  initGa();
  ReactGA.pageview(location);
};

// export const trackEvent = (id: string) => {
//   initGa();
//   ReactGA.event({
//     action: "Clicked xxx",
//     category: "Some category",
//     label: id
//   });
// };
