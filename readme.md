## Github OAuth Proxy

Serverless function that handle code from step#1 and make a POST request on step#2 then redirect to your site with access_token as URL parameter.

## Features

- One-click deploy on Vercel

## How to use

1. create github app https://github.com/settings/apps/new
2. [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/papazeal/github-auth-proxy&env=CLIENT_ID,CLIENT_SECRET,REDIRECT_URI&project-name=github-auth-proxy&repository-name=github-auth-proxy)
3. Go to github app edit page and set `Callback URL` to (on step #1) to https://VERCEL_APP_URL/api/access_token
4. Go to https://github.com/login/oauth/authorize?client_id=YOUR_GITHUB_APP_CLIENT_ID to test your github OAuth flow.
