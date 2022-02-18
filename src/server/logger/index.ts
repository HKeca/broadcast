import 'dotenv/config';
import Rollbar from 'rollbar';

const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
});

const info = (msg: string): void => {
  rollbar.info(msg);
};

const warn = (msg: string): void => {
  rollbar.warn(msg);
};

export { info, warn };
