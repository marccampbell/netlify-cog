import * as netlify from 'netlify';
import * as _ from 'lodash';

module.exports = async function(clientOptions) {
  if (!clientOptions) {
    clientOptions = {};
  }
  clientOptions.access_token = process.env["NETLIFY_ACCESS_TOKEN"];

  const client = netlify.createClient(clientOptions);

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

