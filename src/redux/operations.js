// import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAddContact, fetchAllContacts, fetchDeleteContact } from "services/api";

export const fetchContactsThunk = createAsyncThunk('contacts/fetchAllContacts',
async(_, thunkApi)=>{
    try {
        const contactsData = await fetchAllContacts();
        return contactsData;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const addContactThunk = createAsyncThunk('contacts/addContact',
async(contact, thunkApi)=>{
    try {
        const contactsData = await fetchAddContact(contact);
        return contactsData;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const deleteContactThunk = createAsyncThunk('contacts/deleteContact',
async(contactId, thunkApi)=>{
    try {
        const contactsData = await fetchDeleteContact(contactId);
        return contactsData;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})