const Router = require("express");
const router = new Router();
const ratingController = require('../controllers/ratingController')
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("USER"), ratingController.create);
router.get("/", ratingController.getAll);
router.get("/:id", ratingController.getOne);
router.put("/:id", checkRole("ADMIN"), ratingController.updateOne)
router.delete("/:id", checkRole("ADMIN"), ratingController.deleteOne );

module.exports = router;