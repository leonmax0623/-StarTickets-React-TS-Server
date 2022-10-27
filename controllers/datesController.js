const ApiError = require("../error/ApiError");
const { Dates } = require("../models/models");

class DatesController {
    async create(req, res, next) {
      try {
        const { datetime } = req.body;
        const dateTime = await Dates.create({ datetime });
        return res.status(200).json(dateTime);
      } catch (error) {
        next(ApiError.badRequest(error.message));
      }   
  }

  async getAll(req, res, next) {
    try {
      const dates = await Dates.findAll();
    return res.status(200).json(dates)
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
    
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const dateTime = await Dates.findOne({ where: { id } });
      return res.status(200).json(dateTime);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async updateOne(req, res, next) {
    try {
      const { datetime } = req.body;
      const dateTime = await Dates.update({ datetime }, { where: { id: req.params.id } });
      return res.status(200).json(dateTime);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async deleteOne(req, res, next) {
    try {
      const dateTime = await Dates.destroy({ where: { id: req.params.id } });
      return res.status(200).json(dateTime);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new DatesController();
