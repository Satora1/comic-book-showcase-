const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  nick: String,
  password: String
});

const LOGIN = mongoose.model("ActionsLog", schema);

class LogActions {
  async register(req, res) {
    console.log(req.body)
    const { email, nick, password } = req.body;
    const sameNick = await LOGIN.findOne({ nick: req.body.nick })
    const sameEmail = await LOGIN.findOne({ nick: req.body.email })
    if (sameNick) { res.json("Nickname already in use") }
    if (sameEmail) { res.json("Email already in use") }
    if(!sameNick && !sameEmail){
      const log = new LOGIN({ email, nick, password });
      await log.save();
      res.json("user created");
    }
  }

  async login(req, res) {
    try {
      const user = await LOGIN.findOne({ nick: req.body.nick, password: req.body.password })
      console.log(user)
      if (!user) {
        res.json("user not found")
      }
      if (user) {
        res.json(["user found", user])
      }
    } catch {
      console.error()
    }
  }
}

module.exports = new LogActions();