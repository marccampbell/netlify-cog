'use strict';

const _ = require('lodash');
const chai = require('chai');
const chaiPromised = require("chai-as-promised");
const nock = require('nock');

const expect = chai.expect;

const listSites = require('../lib/netlify/listSites');

chai.use(chaiPromised);

describe('sites', () => {
  describe("#listSites works", () => {
    it("validates that list sites works with the mock api", () => {
      const mockResult = [
        {
          "id":"3970e0fe-8564-4903-9a55-c5f8de49fb8b",
          "premium":false,
          "claimed":true,
          "name":"synergy",
          "custom_domain":"www.example.com",
          "url":"http://www.example.com",
          "admin_url":"https://api.netlify.com/sites/synergy",
          "screenshot_url":null,
          "created_at":"2013-09-17T05:13:08Z",
          "updated_at":"2013-09-17T05:13:19Z",
        }
      ];

      const netlify = nock('https://api.netlify.com')
                .get('/api/v1/sites')
                .reply(200, mockResult);

      return expect(listSites({})).to.eventually.have.length(1);
    });
  });
});
