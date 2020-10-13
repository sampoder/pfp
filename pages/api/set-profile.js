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
    token:
      "xoxp-2210535565-906804643779-1422898800979-2e5ab8986510325020b0b9f68ef3e8b2",
  });
  res.send(set);
};
