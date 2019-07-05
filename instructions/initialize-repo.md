# Initialize our example repository

- Create the repo folder and move to it
~~~~
$ mkdir gitflow-example-project
$ cd gitflow-example-project
~~~~

- Initialize git repo as follows:
~~~~
$ git init
$ git remote add origin ${The url of you clean repo}
$ git fecth origin
~~~~

- Create the file .gitignore:
~~~~
$ touch .gitignore
$ echo node_modules/** > .gitignore
$ echo instructions/** > .gitignore
~~~~

- Add .gitignore to be tracking by git and commit for the firts time
~~~~
$ git add .gitignore
$ git commit -m "Initial commit"
$ git status
$ git push --set-upstream origin master
~~~~