const ApiError = require("../error/ApiError");
const {Rating} = require('../models/models');

class RatingController {
  async create(req, res, next) {
    try {
      const { rate, comment } = req.body;
      const rating = await Rating.create({ rate, comment });
      return res.status(200).json(rating);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }   
}

async getAll(req, res, next) {
  try {
    const ratings = await Rating.findAll();
  return res.status(200).json(ratings)
  } catch (error) {
    next(ApiError.badRequest(error.message));
  }
  
}

async getOne(req, res, next) {
  try {
    const { id } = req.params;
    const rating = await Rating.findOne({ where: { id } });
    return res.status(200).json(rating);
  } catch (error) {
    next(ApiError.badRequest(error.message));
  }
}

async updateOne(req, res, next) {
  try {
    const { rate, comment } = req.body;
    const rating = await Rating.update({ rate, comment }, { where: { id: req.params.id } });
    return res.status(200).json(rating);
  } catch (error) {
    next(ApiError.badRequest(error.message));
  }
}

async deleteOne(req, res, next) {
  try {
    const rating = await Rating.destroy({ where: { id: req.params.id } });
    return res.status(200).json(rating);
  } catch (error) {
    next(ApiError.badRequest(error.message));
  }
}
}

module.exports = new RatingController();