# Gitflow firts steps

## Create development branch
~~~~console
$ git checkout -b development
~~~~

**Be sure you are on it**
~~~~console
$ git branch
~~~~

**The output must be:**
~~~~console
* development
~~~~


## Init repo as npm package

- Init as npm package (hit enter in everything for the moment):

~~~~console
$ npm init
~~~~

- Add package.json to be tracking by git:
~~~~console
$ git add package.json
$ git commit -m "Added the firts version of package.json"
$ git push --set-upstream origin development
~~~~

- Step two install create-react-app to create an react app too fast
~~~~console
$ npm install --save-dev create-react-app
~~~~

- create a react basic project

~~~~console
$ npx create-react-app gitflow-example
~~~~

- Adding changes of package.json with packe to see what changes
~~~~console
$ git add -p
~~~~

Select the changes you want to commit and type "y" (only the create-react-app as devDependency must exists to add)
Like this:

~~~~diff
@@ -16,7 +16,8 @@
     "url": "https://github.com/${username}/gitflow-example-project/issues"
   },
   "homepage": "https://github.com/${username}/gitflow-example-project#readme",
-  "dependencies": {
+  "dependencies": {},
+  "devDependencies": {
     "create-react-app": "^3.0.1"
   }
 }
Stage this hunk [y,n,q,a,d,e,?]?
~~~~

- Add the not tracking files, must be the following if you do "git status":
~~~~console
$ git status
On branch development
Your branch is up to date with 'origin/development'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   package.json

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        gitflow-example/
        package-lock.json
~~~~

It means:
1. gitflow-example/
2. package-lock.json

*So we'll adding not with **"git add -p"** but with **"git add"** alone, because **-p** means **"patching"** and files are **untracked*** as follows:
~~~~
$ git add .
~~~~

*git status* must displays the following:
~~~~console
$ git status
On branch development
Your branch is up to date with 'origin/development'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   gitflow-example/.gitignore
        new file:   gitflow-example/README.md
        new file:   gitflow-example/package-lock.json
        new file:   gitflow-example/package.json
        new file:   gitflow-example/public/favicon.ico
        new file:   gitflow-example/public/index.html
        new file:   gitflow-example/public/manifest.json
        new file:   gitflow-example/src/App.css
        new file:   gitflow-example/src/App.js
        new file:   gitflow-example/src/App.test.js
        new file:   gitflow-example/src/index.css
        new file:   gitflow-example/src/index.js
        new file:   gitflow-example/src/logo.svg
        new file:   gitflow-example/src/serviceWorker.js
        new file:   package-lock.json
        modified:   package.json

~~~~

- Do the commit and pusblish
~~~~console
$ git commit -m "Added the initial react app structure"
$ git push
~~~~

- Moving to the react app folder and init the server

~~~~console
$ cd gitflow-example
$ npm start
~~~~
- We must obtanied something as follows:

![react app first render](../images/react-app-first-render.png "First render")

- Install bootstrap react components (inside the react app folder)
~~~~console
$ npm install --save bootstrap
$ npm install --save reactstrap react react-dom
$ npm install --save react-router-dom
$ npm install --save @gitgraph/react
~~~~

- Add the following files to the src folder (In your project):
  1. [MainNavBar.jsx](../react-components/MainNavBar.jsx)
  2. [Home.jsx](../react-components/Home.jsx)
  3. [gitHistory.js](../react-components/gitHistory.js)

- Replace the App.jsx with the following:
    [App.js](../react-components/App.js)

- Commit the changes:
~~~~console
$ git add -p
$ git add .
$ git commit -m "Replaced basid react app structure with own structure"
$ git push
~~~~

- Run again the project to see the changes

- Generate a feature branch as follows:
~~~~console
$ git checkout -b feature/feature1
~~~~

- Install lorem ipsum dolor to simulate a dependency added in this branch

~~~~console
$ npm install --save react-lorem-component
~~~~

- Add to src file the next react file [Feature1.jsx](../react-components/Feature1.jsx)
- Change the gitHistory file adding next lines:
~~~~js
...
  develop.commit("Replaced basid react app structure with own structure");

  const feature1 = gitgraph.branch("feature/feature1");
  feature1.commit("Added Feature1.jsx source code file")
...
~~~~

- Commit the changes with the same commit message:
~~~~bash
$ git add .
$ git commit -m "Added Feature1.jsx source code file"
# Publish the branch
$ git push --set-upstream origin feature/feature1

~~~~

- Modify the App.js and importing the Feature1 as follows:
~~~~js
...

import Carousel from './Carousel';
import Home from './Home';
import Feature1 from './Feature1'; // Adding this line

...
~~~~

- Add the Feature1 to Router as follow:
~~~~jsx
...
            <Route exact path="/" component={Home} />
            <Route exact path="/feature1" component={Feature1} /> // Adding this line
...
~~~~

- Modify gitHistory as follow:
~~~~js
...
  feature1.commit("Added Feature1.jsx source code file");
  feature1.commit("Added Feature1 to routes"); // Adding this line
...
~~~~

- Add the canges to git, commit it and push it:
~~~~console
$ git add -p
$ git commit -m "Added Feature1 to routes"
$ git push
~~~~

- Modify the MainNavBar and add a Link to Feature1:
  - Import Link from 'react-router-dom' as follows:
    ~~~~jsx
    import React from "react";
    import { Link } from 'react-router-dom'; // Adding this line

    import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
    } from "reactstrap";

    ...
    ~~~~
  - Modify the code as follows:
    ~~~~jsx
    ...
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink to="/Feature1" tag={Link}> // Modifing these lines
            Feature1
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="https://github.com/reactstrap/reactstrap">
            Link 1
        </NavLink>
      </NavItem>
    ...
    ~~~~

- Modify git history:
~~~~js
...
  feature1.commit("Added Feature1 to routes");
  feature1.commit("Added Feature1 to MainNavBar"); // Adding this line
...
~~~~

- Add the changes and commit:
~~~~console
$ git add -p
$ git commit -m "Added Feature1 to MainNavBar"
$ git push
~~~~

>**Note:** We leave this branch for a moment and we'll get another branch for dev (this work actually is doing at the same time).

- Return to development branch and get feature2 from it
~~~~console
$ git checkout development
$ git checkout -b feature/feature2
~~~~

- Install pinterest gestalt:

~~~~console
$ npm install gestalt --save
~~~~

- Add the next file to source folder [Feature2.jsx](../react-components/Feature2.jsx)
- Modify git history:
~~~~js
...
  develop.commit("Replaced basic react app structure with own structure");

  const feature2 = gitgraph.branch("feature/feature2"); // Adding this lines
  feature2.commit("Added Feature.jsx to source");
...
~~~~

- Commit the changes:
~~~~console
$ git add .
$ git commit -m "Added Feature.jsx to source"
$ git push -u origin feature/feature2
~~~~

- Add Feature to routes in App.js:

  - Modify the imports
  ~~~~jsx
  ...

  import Carousel from './Carousel';
  import Home from './Home';
  import Gallery from './Feature2'; // Adding this line

  ...
  ~~~~

  ~~~~jsx
  ...
              <Route exact path="/" component={Home} />
              <Route exact path="/feature2" component={Gallery} /> // Adding this line
  ...
  ~~~~

- Modify git history:
~~~~js
...
  feature2.commit("Added Feature.jsx to source");
  feature2.commit("Added Feature2 to routes") // Adding this lines
...
~~~~

- Commit the changes:
~~~~console
$ git add .
$ git commit -m "Added Feature2 to routes"
$ git push
~~~~

- Modify the MainNavBar and add a Link to Feature2:
  - Import Link from 'react-router-dom' as follows:
    ~~~~jsx
    import React from "react";
    import { Link } from 'react-router-dom'; // Adding this line

    import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
    } from "reactstrap";

    ...
    ~~~~
  - Modify the code as follows:
    ~~~~jsx
    ...
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink to="/feature2" tag={Link}> // Modifing these lines
            Feature2
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="https://github.com/reactstrap/reactstrap">
            Link 1
        </NavLink>
      </NavItem>
    ...
    ~~~~

- Modify git history:
~~~~js
...
  feature2.commit("Added Feature2 to MainNavbar") // Adding this lines
...
~~~~

- Commit the changes:
~~~~console
$ git add .
$ git commit -m "Added Feature2 to MainNavbar"
$ git push
~~~~

> We finalized  the example feature, so we'll merge every branch into dev

- Go to development branch:
~~~~console
$ git checkout development
~~~~
- Merge feature branch into development and add a tag
~~~~console
$ git merge --no-ff feature/feature1 # --no-ff means no fast forward it's to avoid recursive merge and force to do a merge commit
$ git push
$ git tag -a feature1
$ git push origin feature1
~~~~
- Check if the tag was set:
~~~~console
$ git tag -l
~~~~
- We need to remove the branch from local and remote:
  - Removing from local:
  ~~~~console
  $ git branch --delete feature/feature1
  ~~~~
  - Removing from remote:
  ~~~~console
  $ git push --delete origin feature/feature1
  ~~~~
  - Modify gitHistory file:
  ~~~~js
  ...
    develop.merge({
      branch: feature2,
      fastForward: false
    });
  ...
  ~~~~

> Reapeat from Feature2:

- Merge feature branch into development and add a tag
~~~~console
$ git merge --no-ff feature/feature2 # --no-ff means no fast forward it's to avoid recursive merge and force to do a merge commit
~~~~

- Conflict will appear you need to resolve it:
~~~~console
$ git mergetool
~~~~
- Resolve it and when it's done continue:

~~~~
$ git merge --continue

$ git push
$ git tag -a feature2
$ git push origin feature2
~~~~
- Check if the tag was set:
~~~~console
$ git tag -l
~~~~
- We need to remove the branch from local and remote:
  - Removing from local:
  ~~~~console
  $ git branch --delete feature/feature2
  ~~~~
  - Removing from remote:
  ~~~~console
  $ git push --delete origin feature/feature2
  ~~~~
  - Modify gitHistory file:
  ~~~~js
  ...
    develop.merge({
      branch: feature2,
      fastForward: false
    });
  ...
  ~~~~

- Do the quick bug fix removing twice declaration on Link modify gitHistory:
~~~~js
...
  develop.commit("Bugfix removed twice declaration of Link in MainNavBar") // Adding this lines
...
~~~~

- From develop do a realease:
~~~~console
$	git checkout -b release/new_features
~~~~

- Cause a bug removing bootstrap.css from App.js
~~~~jsx
import Gallery from './Feature2'

// import "bootstrap/dist/css/bootstrap.min.css"; // Just comment it

~~~~

- Modified the gitHistory
~~~~js
...
  const realese1 = gitgraph.branch("release/new_features");
  realese1.commit("Bad Changes")
  master.merge({
    branch: realese1,
    fastForward: false
  });
...
~~~~


- Commit the bad changes:
~~~~console
$ git add .
$ gi commit -m "Bad Changes"
$ git push -u origin release/new_features
~~~~

- Do the realese:
~~~~console
$ git checkout master
$ git merge --no-ff release/new_features
$ git push
$ git tag -a new_features
$ git push origin new_features
$ git checkout develop
$ git merge --no-ff release/new_features
$ git push
$ git branch --delete release/new_features
$ git push --delete origin release/new_features
~~~~

- Note everything it's broken and do a hotfix:
~~~~console
$ git checkout -b hotfix/new_features
~~~~
  - Remove comment from App.js
  ~~~~jsx
  import Gallery from './Feature2'

  import "bootstrap/dist/css/bootstrap.min.css"; // Just comment it

  ~~~~

  - modify the history:
  ~~~~js
  ...
    const hotfix = gitgraph.branch("hotfix/new_features");
    hotfix.commit("Hotfix related with bootstrap.cs")
  ...
  ~~~~

  - Commit the good changes:
  ~~~~console
  $ git add .
  $ gi commit -m "Hotfix related with bootstrap.css"
  $ git push -u origin release/new_features
  ~~~~

  - Set the hotfix:
  ~~~~console
  $ git checkout master
  $ git merge --no-ff hotfix/new_features
  $ git push
  $ git tag -a new_features
  $ git push origin -a new_features
  $ git checkout develop
  $ git merge --no-ff hotfix/new_features
  $ git push
  $ git branch --delete hotfix/new_features
  $ git push --delete origin hotfix/new_features
  ~~~~

  - modify the history:
  ~~~~js
  ...
    master.merge({
      branch: hotfix,
      fastForward: false
    });
    develop.merge({
      branch: hotfix,
      fastForward: false
    });
  ...
  ~~~~

You need to get something like this:

![react app first render](../images/result.png "Result")



> That's all folks