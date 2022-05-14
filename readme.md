## Github OAuth Proxy

Serverless function that handle code from step #1 https://github.com/papazeal/github-oauth-proxy and make a POST request on step #2 https://github.com/papazeal/github-oauth-proxy then redirect to your site with access_token as URL parameter.

## Features

- One-click deploy on Vercel
- Serverless

## How to use

1. create github app https://github.com/settings/apps/new
2. [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/papazeal/github-oauth-proxy&env=CLIENT_ID,CLIENT_SECRET,REDIRECT_URI&project-name=github-auth-proxy&repository-name=github-auth-proxy)
3. Go to github app edit page and set `Callback URL` to https://VERCEL_APP_URL/api/access_token
4. Go to https://github.com/login/oauth/authorize?client_id=GITHUB_APP_CLIENT_ID to test your github OAuth flow.
