# Netlify Bundle for Cog

## Commands
```
netlify:list <project> - Show a list of recent deploys and statuses of a project
netlify:describe <project> - Show the current deploy of a project
netlify:sites - List all current sites in the Netlify account
```

## Configuration
All configuration variables are required.
```
NETLIFY_ACCESS_TOKEN=<YOUR NETLIFY PERSONAL ACCESS TOKEN>
```

## Building
Clone this repo and then:

```shell
make build
```

This project is written in Node, but using a typescript transpiler to take advantage of async/await functionality. It could also use typescript!