import { Controller, Get, Post, Delete, Put, Body, Param, Query } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ObjectID } from 'bson';
import { IContact } from './contact.interface';

@Controller('contacts')
export class ContactsController {

    constructor(private readonly contactsService: ContactsService){}

    @Get(':idContato')
    async find(@Param('idContato') contactId: ObjectID) {
        console.log('GET', contactId);
        return await this.contactsService.find(contactId);
    }

    @Put(':idContato')
    async update(@Param('idContato') contactId: ObjectID, @Body() contact: IContact) {
        console.log('UPDATE', contactId);
        return await this.contactsService.update(contactId, contact);
    }

    @Delete(':idContato')
    async delete(@Param('idContato') contactId: ObjectID) {
        console.log('DELETE', contactId);
        return await this.contactsService.delete(contactId);
    }

    @Get()
    async findAll(@Query('size') size: number, @Query('page') page: number) {
        console.log('GET PAGINATION', size, page);
        return await this.contactsService.findAll(size, page);
    }

    @Post()
    async create(@Body() contact: IContact) {
        console.log('POST');
        return await this.contactsService.create(contact);
    }

}
