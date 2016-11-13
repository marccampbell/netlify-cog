import 'source-map-support/register';
import * as threads from 'threads';
import * as path from 'path';

import * as describeSite from './netlify/describeSite';

module.exports = function() {
  describeSite(process.env.COG_ARGV_0).then((site) => {
    if (!site) {
      console.error(`The site "${process.env.COG_ARGV_0}" was not found in the Netlify account.`);
      process.exit(1);
      return;
    }

    console.log('COG_TEMPLATE: describe')
    console.log('JSON\n');
    console.log(JSON.stringify(site));
  });
};
