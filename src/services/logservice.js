function init() {
  // Sentry.init({
  //   // dsn: "https://b94bb44cb9744843ac71d52450fc446f@o946246.ingest.sentry.io/5895134",
  //   // integrations: [new Integrations.BrowserTracing()],
  //   // // Set tracesSampleRate to 1.0 to capture 100%
  //   // // of transactions for performance monitoring.
  //   // // We recommend adjusting this value in production
  //   // tracesSampleRate: 0.5,
  // });
}

function log(error) {
  console.log(error);
}
export default {
  init,
};
