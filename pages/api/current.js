const axios = require("axios").default;
const S1 = require('s1db')
const db = new S1(process.env.S1_TOKEN)

export default  async (req, res) => {
  res.redirect(await db.get('image'))
};
