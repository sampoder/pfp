// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require('fs')

export default (req, res) => {
  const context = require.context('../../public/images', true)
  let photos = context.keys()
  let photo = photos[Math.floor(Math.random() * photos.length)]
  res.statusCode = 200
  res.json({ photo: photo })
}
