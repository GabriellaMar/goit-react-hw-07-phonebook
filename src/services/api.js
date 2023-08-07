import axios from 'axios';

const BASE_URL = 'https://64cb5d01700d50e3c705c6c0.mockapi.io';

export const fetchAllContacts = async ()=>{
    const { data } = await axios.get(`${BASE_URL}/contacts`);
    return data;
}

export const fetchAddContact = async (contact) => {
    const { data } = await axios.post(`${BASE_URL}/contacts`, contact);
    return data;
}

export const fetchDeleteContact = async (contactId) =>{
    const { data } = await axios.delete(`${BASE_URL}/contacts/${contactId}`)
    return data
}