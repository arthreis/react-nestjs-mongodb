import * as mongoose from 'mongoose';
import { ObjectID } from 'bson';

export interface IContact extends mongoose.Document {

    id?: ObjectID

    nome: String

    canal: String

    valor: String

    obs: String
}
