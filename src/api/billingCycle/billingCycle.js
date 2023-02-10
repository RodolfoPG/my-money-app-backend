const { Schema } = require('mongoose')
const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, min: 0, required: true }
})

const debtSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, min: 0, required: true },
  status: {
    type: String,
    required: false,
    uppercase: true,
    enum: ['PAGO', 'PENDENTE', 'AGENDADO']
  }
})

const billingCycleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  month: { type: NUmber, min: 1, max: 12, require: true },
  year: { type: String, required: false, uppercase: true },
  credits: [creditSchema],
  debts: [debtSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)
