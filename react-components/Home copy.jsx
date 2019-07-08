import React from "react";
import { Gitgraph } from "@gitgraph/react";
import gitHistory from "./gitHistory";

const Home = () => {
  return (
    <div>
      <h1 className="text-justify">Git history graph</h1>
      <Gitgraph options={{ orientation: "vertical-reverse", template: "blackarrow" }}>
        {gitHistory}
      </Gitgraph>
    </div>
  );
};

export default Home;
