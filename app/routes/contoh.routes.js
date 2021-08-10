const controller = require("../controllers/contoh.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  //crud contoh
  app.post("/api/contoh", controller.postContoh);
  app.get("/api/contoh", controller.getContoh);
  app.get("/api/contoh/:id", controller.getContohById);
  app.put("/api/contoh/:id", controller.putContoh);
  app.delete("/api/contoh/:id", controller.delContoh);
  app.delete("/api/contoh", controller.delAllContoh);
};
