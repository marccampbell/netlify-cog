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
    console.log('COG_TEMPLATE: list')
    console.log('JSON');
    if (sites) {
      console.log(sites);
    } else {
      console.log('no sites');
    }
  });
};




