const jwt = require("jsonwebtoken");
const authenticate = (req, res, next) => {
  const token = req.header("token");
  try {
    const decode = jwt.verify(token, "phu2000");
    if (decode) {
      req.user = decode;
      next();
      console.log("🛡️ Đã vào authenticate");
    } else {
      res.status(401).send("Bạn chưa đăng nhập");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  authenticate,
};
