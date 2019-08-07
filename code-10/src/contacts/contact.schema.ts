import * as mongoose from 'mongoose';

export const ContactSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    canal: {
        type: String,
        required: true,
    },
    valor: {
        type: String,
        required: true,
    },
    obs: String,
});
