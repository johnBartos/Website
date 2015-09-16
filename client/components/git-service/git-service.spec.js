ngDescribe({
  name: 'git-service tests',
  modules: 'websiteApp',
  inject: 'gitService',
  tests: function (deps) {
    it('has a function named getRepos', function () {
      expect(typeof deps.gitService.getRepos).toEqual('function');
    });
  }
});
