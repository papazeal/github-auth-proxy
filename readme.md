## Github OAuth Proxy

Serverless function that handle code from step#1 and make a POST request on step#2 then redirect to your site with access_token as URL parameter.

## Features

- One-click deploy on Vercel

## How to use

1. create github app https://github.com/settings/apps/new
2. deploy proxy [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/papazeal/github-auth-proxy&env=CLIENT_ID,CLIENT_SECRET,REDIRECT_URI)
