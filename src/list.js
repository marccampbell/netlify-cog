import 'source-map-support/register';
import * as threads from 'threads';
import * as path from 'path';

import * as listBuilds from './netlify/listBuilds';

module.exports = function() {
  // Convert the Cog environment to process.env
  const args = [];
  for (let i = 0; i < process.env.COG_ARGC; i++) {
    args.push(process.env[`COG_ARGV_${i}`]);
  }

  listBuilds(args).then((sites) => {
    if (!sites) {
      console.error(`The site ${args[0]} was not found in the Netlify account.`);
      process.exit(1);
      return;
    }

    console.log('COG_TEMPLATE: list')
    console.log('JSON\n');
    console.log(JSON.stringify(sites));
  });
};
