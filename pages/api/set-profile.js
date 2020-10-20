const axios = require("axios").default;
import { WebClient } from "@slack/web-api";
const S1 = require('s1db')
const db = new S1(process.env.S1_TOKEN)

export default async (req, res) => {
  const client = new WebClient();

  
  const context = require.context('../../public/images', true)
  let photos = context.keys()
  let photo = photos[Math.floor(Math.random() * photos.length)].replace('./', 'https://change-my-pfp.now.sh/images/')
  const image = await axios.get(photo, {
    responseType: "arraybuffer",
  });
  await db.set('image', photo)
  const slackRequest = await client.users.setPhoto({
    image: image.data,
    token: process.env.SLACK_TOKEN,
  });
  const slackRequest = await client.users.setPhoto({
    image: image.data,
    token: process.env.STU_CO_SLACK_TOKEN,
  });
  res.redirect('https://change-my-pfp.now.sh');
};
