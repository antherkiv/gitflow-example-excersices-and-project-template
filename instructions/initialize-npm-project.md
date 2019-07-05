# Gitflow firts steps

## Create development branch
~~~~
$ git checkout -b development
~~~~

**Be sure you are on it**
~~~~
$ git branch
~~~~

**The output must be:**
~~~~
* development
~~~~


## Init repo as npm package

- Init as npm package (hit enter in everything for the moment):

~~~~
$ npm init
~~~~

- Add package.json to be tracking by git:
~~~~
$ git add package.json
$ git commit -m "Added the firts version of package.json"
$ git push --set-upstream origin development
~~~~

- Step two install create-react-app to create an react app too fast
~~~~
$ npm install create-react-app
~~~~

- create a react basic project

~~~~
npx create-react-app gitflow-example
~~~~