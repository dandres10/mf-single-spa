import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@connection/mf-navbar",
  app: () => System.import<LifeCycles>("@connection/mf-navbar"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@connection/mf-side-bar",
  app: () => System.import<LifeCycles>("@connection/mf-side-bar"),
  activeWhen: ["/mf-side-bar"]
});



start({
  urlRerouteOnly: true,
});
