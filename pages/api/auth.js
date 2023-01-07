import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(NextApiRequest, NextApiResponse) {
  NextApiResponse.setHeader('WWW-authenticate', 'Basic realm="Secure Area"')
  NextApiResponse.statusCode = 401
  NextApiResponse.end(`Auth Required.`)
}