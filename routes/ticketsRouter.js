const Router = require("express");
const router = new Router();
const ticketsController = require("../controllers/ticketsController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), ticketsController.create);
router.get("/", checkRole("USER"), ticketsController.getAll);
router.get("/:id", checkRole("USER"), ticketsController.getOne);
router.put("/:id", checkRole("ADMIN"), ticketsController.updateOne);
router.delete("/:id", checkRole("ADMIN"), ticketsController.deleteOne);

module.exports = router;
