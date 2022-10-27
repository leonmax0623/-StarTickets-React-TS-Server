const Router = require("express");
const router = new Router();
const datesController = require("../controllers/datesController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), datesController.create);
router.get("/", datesController.getAll);
router.get("/:id", datesController.getOne);
router.put("/:id", checkRole("ADMIN"), datesController.updateOne);
router.delete("/:id", checkRole("ADMIN"), datesController.deleteOne);

module.exports = router;
