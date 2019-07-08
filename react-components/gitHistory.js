const gitHistory = gitgraph => {
  const master = gitgraph.branch("master");
  master.commit("Initial commit");

  const develop = gitgraph.branch("development");
  develop.commit("Added the firts version of package.json");
  develop.commit("Added the initial react app structure");
  develop.commit("Replaced basid react app structure with own structure");

  const feature1 = gitgraph.branch("feature/feature1");
  const feature2 = gitgraph.branch("feature/feature2");

  feature1.commit("Added Feature1.jsx source code file");
  feature1.commit("Added Feature1 to routes");
  feature1.commit("Added Feature1 to MainNavBar");

  develop.merge({
    branch: feature1,
    fastForward: false
  });

  feature2.commit("Added Gallery.jsx to source");
  feature2.commit("Added Feature2 to routes");
  feature2.commit("Added Feature2 to MainNavbar");

  develop.merge({
    branch: feature2,
    fastForward: false
  });

  develop.commit("Bugfix removed twice declaration of Link in MainNavBar");

  const realese1 = gitgraph.branch("realese/new_features");
  realese1.commit("Bad Changes");

  master.merge({
     branch: realese1,
     fastForward: false
  });

  const hotfix = gitgraph.branch("hotfix/new_features");
  hotfix.commit("Hotfix related with bootstrap.cs");


  master.merge({
    branch: hotfix,
    fastForward: false
  });
  develop.merge({
    branch: hotfix,
    fastForward: false
  });

};

export default gitHistory;
