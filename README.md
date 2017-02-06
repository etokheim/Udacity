# Udacity
My projects from Udacity's Front-End Web Developer Nanodegree. They are all combined into one repository. Now I've got one to rule them all! Forked repositories are added as nested repositories (submodules).

## Download
When downloading you should use the --recursive command which includes the submodules.
```bash
git clone --recursive https://github.com/etokheim/Udacity.git
```

Optionally, or if you didn't read the README file before cloning, you could do the following to add the remaining files after downloading the "master" repository:
```bash
git clone https://github.com/etokheim/Udacity.git

# Initializes the local .gitmodules
git submodule init

# Updates/downloads all submodules
git submodule update
```
