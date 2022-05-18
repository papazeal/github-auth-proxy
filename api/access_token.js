import fetch from 'node-fetch'

export default async function handler(request, response) {
  const { code, state } = request.query
  const isUrl = (string) => {
    try {
      return Boolean(new URL(string))
    } catch (e) {
      return false
    }
  }

  const authResponse = await fetch(
    'https://github.com/login/oauth/access_token?code=' +
      code +
      '&client_id=' +
      process.env.CLIENT_ID +
      '&client_secret=' +
      process.env.CLIENT_SECRET,
    {
      method: 'POST',
    }
  )
  const authResponseText = await authResponse.text()

  if (process.env.REDIRECT_URI) {
    // redirect to REDIRECT_URI
    response
      .writeHead(301, {
        Location: process.env.REDIRECT_URI + '?' + authResponseText,
      })
      .end()
  } else if (state && isUrl(state)) {
    // if REDIRECT_URI is not defined
    // use state params for dynamic redirect
    response.writeHead(301, {
      Location: state + '?' + authResponseText,
    })
  } else {
    response.status(200).json({
      Response: authResponseText,
    })
  }
}
