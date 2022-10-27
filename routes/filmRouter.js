const Router = require("express");
const router = new Router();
const filmController = require("../controllers/filmController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), filmController.create);
router.get("/", filmController.getAll);
router.get("/:id", filmController.getOne);
router.put("/:id", checkRole("ADMIN"), filmController.updateOne);
router.delete("/:id", checkRole("ADMIN"), filmController.deleteOne);

module.exports = router;
