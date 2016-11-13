import 'source-map-support/register';
import * as threads from 'threads';
import * as path from 'path';

import * as listSites from './netlify/listSites';

module.exports = function() {
  listSites({}).then((sites) => {
    console.log('COG_TEMPLATE: sites')
    console.log('JSON\n');
    console.log(JSON.stringify(sites));
  });
};
