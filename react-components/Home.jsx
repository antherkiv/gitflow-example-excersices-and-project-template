import React from 'react';
import { Gitgraph } from "@gitgraph/react";

const Home = () => {
  return (
    <Gitgraph>
      {gitgraph => {
        const master = gitgraph.branch("master");
        master.commit("Added the initial react app structure");

        const develop = gitgraph.branch("development");
        develop.commit("Added the firts version of package.json");
        develop.commit()
      }}
    </Gitgraph>
  );
}

export default Home;