import * as netlify from 'netlify';
import * as _ from 'lodash';

module.exports = async function(args) {
  // args[0] is the site name
  const client = netlify.createClient({ access_token: process.env["NETLIFY_ACCESS_TOKEN"] });

  const sites = await client.sites();

  const result = _.map(sites, (site) => {
    return {
      name: site.name,
      custom_domain: site.custom_domain,
      updated_at: site.updated_at,
    }
  })

  return result;
};

