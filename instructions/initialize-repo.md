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
$ git fetch origin
~~~~

- Create the file .gitignore:
~~~~
$ touch .gitignore
$ echo node_modules/** > .gitignore
$ echo instructions/** > .gitignore
~~~~

- Dowload the next quickly but functional [.gitignore info for node](https://www.gitignore.io/api/node) and paste it with your favorite editor in .gitignore


- Add .gitignore to be tracking by git and add your first commit
~~~~
$ git add .gitignore
$ git commit -m "Initial commit"
$ git push --set-upstream origin master
$ git status
~~~~

The output must be something like follows:

~~~~
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean
~~~~