import * as netlify from 'netlify';
import * as _ from 'lodash';

module.exports = async function(args) {
  // args[0] is the site name
  const client = netlify.createClient({ access_token: process.env["NETLIFY_ACCESS_TOKEN"] });

  const sites = await client.sites();
  const siteLookup = _.find(sites, { name: args[0] });
  if (!siteLookup) {
    return null;
  }

  const site = await client.site(siteLookup.id);
  let deploys = await site.deploys();

  // Return up to 10 builds
  deploys = _.slice(deploys, 0, 10);

  const result = _.map(deploys, (deploy) => {
    return {
      build_id: deploy.build_id,
      state: deploy.state,
      error_message: deploy.error_message,
      created_at: deploy.created_at,
      commit_ref: deploy.commit_ref ? deploy.commit_ref.substring(0, 7) : 'Unknown',
    }
  })

  return result;
};

