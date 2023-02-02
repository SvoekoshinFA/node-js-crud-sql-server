module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
    //const jasper = require("../controllers/jasper.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", tutorials.create);
  
    // Retrieve all Tutorials
    router.get("/", tutorials.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tutorials.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);
  
    // Delete all Tutorials
    router.delete("/", tutorials.deleteAll);

    //router.get("/file", jasper.get)

    router.get("/plugins/servlet/applinks/listApplicationLinks", (req, res) => {
      res.json({ message: "Welcome to bezkoder application." });
    })
  
    app.use('/api/tutorials', router);
  };