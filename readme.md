## GitHub OAuth Proxy

Serverless function that handle `code` from [step #1](https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps#1-request-a-users-github-identity) and make a POST request on [step #2](https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps#2-users-are-redirected-back-to-your-site-by-github) then redirect to your site with access_token as URL parameter.

## Features

- One-click deploy on Vercel
- Serverless

## How to use

1. Create GitHub App https://github.com/settings/apps/new
2. [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/papazeal/github-oauth-proxy&env=CLIENT_ID,CLIENT_SECRET,REDIRECT_URI&project-name=github-oauth-proxy&repository-name=github-oauth-proxy)
3. Go to GitHub App edit page and set `Callback URL` to `https://VERCEL_APP_URL/api/access_token`
4. Go to https://github.com/login/oauth/authorize?client_id=GITHUB_APP_CLIENT_ID to test your GitHub OAuth flow.
