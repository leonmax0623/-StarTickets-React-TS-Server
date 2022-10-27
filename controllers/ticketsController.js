const ApiError = require("../error/ApiError");
const {Tickets} = require('../models/models');

class TicketsController {
  async create(req, res, next) {
    try {
      const { seat_number, price } = req.body;
      const ticket = await Tickets.create({ seat_number, price });
      return res.status(200).json(ticket);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }   
}

async getAll(req, res, next) {
  try {
    const tickets = await Tickets.findAll();
  return res.status(200).json(tickets)
  } catch (error) {
    next(ApiError.badRequest(error.message));
  }
  
}

async getOne(req, res, next) {
  try {
    const { id } = req.params;
    const ticket = await Dates.findOne({ where: { id } });
    return res.status(200).json(ticket);
  } catch (error) {
    next(ApiError.badRequest(error.message));
  }
}

async updateOne(req, res, next) {
  try {
    const { seat_number, price } = req.body;
    const ticket = await Tickets.update({ seat_number, price }, { where: { id: req.params.id } });
    return res.status(200).json(ticket);
  } catch (error) {
    next(ApiError.badRequest(error.message));
  }
}

async deleteOne(req, res, next) {
  try {
    const ticket = await Tickets.destroy({ where: { id: req.params.id } });
    return res.status(200).json(ticket);
  } catch (error) {
    next(ApiError.badRequest(error.message));
  }
}
}

module.exports = new TicketsController();