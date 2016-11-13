import * as netlify from 'netlify';
import * as _ from 'lodash';
import * as util from 'util';

module.exports = async function(siteName) {
  // args[0] is the site name
  const client = netlify.createClient({ access_token: process.env["NETLIFY_ACCESS_TOKEN"] });

  const sites = await client.sites();
  const siteLookup = _.find(sites, { name: siteName });
  if (!siteLookup) {
    return null;
  }

  const site = await client.site(siteLookup.id);

  const result = {
    screenshot_url: site.screenshot_url,
    name: site.name,
    custom_domain: site.custom_domain,
    published_deploy_time: site.published_deploy ? site.published_deploy.created_at : 'none',
    published_deploy_commit : site.published_deploy ? site.published_deploy.commit_url : '',
  }

  return result;
};

