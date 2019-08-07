import api from './api';

export var version = () => {
    return api.get('/');
};

export const contactService = {
    create(newContact) {
        let contact = {
            "nome" : newContact.nome,
            "canal" : newContact.canal,
            "valor" : newContact.valor,
            "obs" : newContact.obs,
        };
        return api.post(`/contacts`, contact);
    },
    edit(id, editedContact) {
        let contact = {
            "nome" : editedContact.nome,
            "canal" : editedContact.canal,
            "valor" : editedContact.valor,
            "obs" : editedContact.obs,
        };
        return api.put(`/contacts/${id}`, contact);
    },
    delete(contactId) {
        return api.delete(`/contacts/${contactId}`);
    },
    list(size, page) {
        return api.get(`/contacts/?size=${size}&page=${page}`);
    },
    version
    ,
    findById(id) {
        return api.get(`/contacts/${id}`);
    }
}
