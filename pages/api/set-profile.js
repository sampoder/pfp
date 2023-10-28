const axios = require("axios").default;
import { WebClient } from "@slack/web-api";
const S1 = require('s1db')
const db = new S1(process.env.S1_TOKEN)
const sharp = require('sharp');

export default async (req, res) => {
  const client = new WebClient();
  const context = require.context('../../public/images', true)
  let photos = context.keys()
  let photo = photos[Math.floor(Math.random() * photos.length)].replace('./', 'https://change-my-pfp.now.sh/images/')
  const image = await axios.get(photo, {
    responseType: "arraybuffer",
  });
  const squareImageBuffer = await sharp(Buffer.from(image.data))
    .resize(400, 400) // Adjust the dimensions as needed
    .toBuffer();
  
  const slackRequest = await client.users.setPhoto({
    image: squareImageBuffer,
    token: process.env.SLACK_TOKEN,
  });
  const slackRequest = await client.users.setPhoto({
    image: squareImageBuffer,
    token: process.env.CAL_HACKS_SLACK_TOKEN,
  });
  await db.set('image', photo)
  res.redirect('https://change-my-pfp.now.sh');
};
