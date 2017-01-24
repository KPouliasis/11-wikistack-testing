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

    beforeEach(function(){
      return Page.sync({force: true})
      .then (function(){
        return Page.create({
        title: 'Required',
        content : 'Cant be none',
        tags : ['one','two', 'three']
        })
      }
    )});
    describe('findByTag', function () {
      it('gets pages with the search tag',function(){
        return Page.findByTag('one').
        then(function(pages){
          expect(pages.length).to.equal(1)
        })
        .catch(console.error)
      });
      it('does not get pages without the search tag', function(){
        return Page.findByTag('four').
        then(function(pages){
          expect(pages.length).to.equal(0)
        })
        .catch(console.log)
      });
    });
  });

  describe('Instance methods', function () {
    beforeEach(function(){
      return Page.sync({force: true})
      .then (function(){
        return Page.create({
        title: 'Required',
        content : 'Cant be none',
        tags : ['one','two', 'three']
        })
      }
    ).then(() => Page.create({title: 'Another', content : 'Stuff',
                              tags: ['one']}))
     .catch(console.error)
    });
    describe('findSimilar', function () {
      it('never gets itself', function(){
        let page;
        return Page.findByTag('one')
        .then(function(results){
          page = results[0];
          return page.findSimilar()
        })
        .then(function(resultsOfSimilar){
          console.log(resultsOfSimilar.length);
          expect(resultsOfSimilar).not.to.contain(page)
        })
      });
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
