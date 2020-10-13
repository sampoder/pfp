const axios = require("axios").default;
import { WebClient } from "@slack/web-api";

export default async (req, res) => {
  const client = new WebClient();
  const image = await axios.get("https://change-my-pfp.now.sh/api/photo", {
    responseType: "arraybuffer",
  });
  console.log(Array.from(image.data));
  const set = await client.users.setPhoto({
    image: image.data,
    token: process.env.SLACK_TOKEN,
  });
  res.send(set);
};
