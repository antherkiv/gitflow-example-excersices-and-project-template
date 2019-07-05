# Initialize our example repository

- Clone instructions repository:
~~~~
$ git clone https://github.com/antherkiv/gitflow-example-excersices-and-project-template.git
~~~~

- Remove old git configuration:
~~~~
$ rm -rf .git
$ rm -rf .gitignore
~~~~

- Step one Initialize git repo as follows:
~~~~
$ git init
$ git remote add origin ${The url of you own repo}
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