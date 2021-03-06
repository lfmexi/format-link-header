'use strict';

const formatLinkAttributes = require('../src/format-link-attributes');
const expect = require('chai').expect;

const linkAttributes = {
  rel: 'last',
  hreflang: 'es',
  content: 'boom',
  url: 'https://api.github.com/user/9287/repos?client_id=1&client_secret=2&page=2&per_page=100'
};

describe('+ format-link-attributes', function () {
  describe('#call', function () {
    it('it should stringify the link attributes as a list of key="value" separated by semicolons, excluding the url attribute', function () {
      const attributes = formatLinkAttributes(linkAttributes);

      expect(attributes).to.be.equals('rel="last"; hreflang="es"; content="boom"');
    });
  });
});
