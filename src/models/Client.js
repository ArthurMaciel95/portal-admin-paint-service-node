const mongoose = require("mongoose");

const Client = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        birthdate:{
            type:Date
          },
        cpf: {
            type: Number,
            unique: true,
            required: true,
        },
        status: {
            type: String,
            default: "pending",
        },
        payment_method: {
            type: String,
            required: true,
        },
        company: String,
        photo: {
            type: Buffer,
        },
        adress: {
            cep: Number,
            district: String,
            additional_infomation: String,
            city: String,
        },
    },
    {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
        autoIndex:false
    }
);

module.exports = mongoose.model("client", Client);
