import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Model } from 'mongoose';
import { IContact } from './contact.interface';
import { InjectModel } from '@nestjs/mongoose';
import { ObjectId } from 'bson';

@Injectable()
export class ContactsService {

    constructor(
        @InjectModel('Contact') private readonly contactsSchema: Model<IContact>
    ){}

    /**
     * Retorna um unico objeto do tipo Contato
     * @param contactId
     * codes 200, 401, 404
     */
    async find(contactId: ObjectId) {
        try {
            return await this.contactsSchema.findById({_id: contactId}).exec();
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    /**
     * Altera um objeto do tipo Contato
     * @param contact
     * codes 204, 400, 401, 404
     */
    async update(contactId: ObjectId, contact: IContact) {
        try {
            return await this.contactsSchema.findOneAndUpdate({_id: contactId}, contact, {new: true}).exec();
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    /**
     * Apaga um objeto do tipo Contato
     * @param contact
     * codes 204, 401, 404
     */
    async delete(contactId: ObjectId) {
        try {
            return await this.contactsSchema.findOneAndDelete({_id: contactId}).exec();
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    /**
     * Retorna uma lista de registros de acordo com o informado nos parametros page e size.
     * Se estes parametros nao forem passados na consulta, os seguintes valores padrao serao utilizados: page = 0 e size = 10
     * @param size Quantidade de registros a ser retornada em uma unica pagina
     * @param page Pagina onde se encontra o subconjunto de registros desejado
     * codes 200, 401, 404
     */
    async findAll(size: number, page: number) {
        try {
            const perPage = size || 10;
            const pageNo = page || 1;
            const pagination = {
                limit: perPage ,
                skip: perPage * (pageNo - 1),
            };
            return await this.contactsSchema.find().limit(Number(pagination.limit)).skip(Number(pagination.skip)).exec();
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    /**
     * Cria um novo objeto do tipo Contato
     * @param contact
     * codes 201, 400, 401
     */
    async create(contact: IContact) {
        try {
            return await this.contactsSchema.create(contact);
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }


}
