# editing website 

```
cd my-website
npx @docusaurus/init@latest init my-website classic

# site will be visible at http://localhost:3000/ by default
```

# deploying site

```
cd my-website

# impiortant to provide DEPLOYMENT_BRANCH otherwise it would deploy to master branch.
GIT_USER=humandotlearning USE_SSH=true DEPLOYMENT_BRANCH=gh-pages yarn deploy

```