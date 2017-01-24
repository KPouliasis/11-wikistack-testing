const expect = require('chai').expect;
const Page = require('../models').Page;

describe('Page model', function () {

  describe('Test spec Page requiring', function(){
    it('should require an object', function(){
      expect(Page).to.be.an('object');
    })
  });

  describe('Virtuals', function () {
    describe('route', function () {
      let pageBuild;
      beforeEach(function(){
        pageBuild = Page.build({
          urlTitle: 'title_goes_here'
        });
      })
      it('returns the url_name prepended by "/wiki/"', function(){
        console.log(pageBuild.route);
        expect(pageBuild.route).to.equal('/wiki/title_goes_here');
      });
    });
    describe('renderedContent', function () {
      it('converts the markdown-formatted content into HTML');
    });
  });

  describe('Class methods', function () {
    describe('findByTag', function () {
      it('gets pages with the search tag');
      it('does not get pages without the search tag');
    });
  });

  describe('Instance methods', function () {
    describe('findSimilar', function () {
      it('never gets itself');
      it('gets other pages with any common tags');
      it('does not get other pages without any common tags');
    });
  });

  describe('Validations', function () {
    it('errors without title');
    it('errors without content');
    it('errors given an invalid status');
  });

  describe('Hooks', function () {
    it('it sets urlTitle based on title before validating');
  });

});
