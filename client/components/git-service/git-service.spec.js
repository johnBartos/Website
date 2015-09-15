ngDescribe({
  name: 'git-service tests',
  modules: 'websiteApp',
  inject: 'gitService',
  tests: function (deps) {
    it('gets all repo names from git', function() {
      console.log(deps);
      expect(typeof deps.gitService.getRepos).toEqual('function');
    });
  }
});
