import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState =
{
 contacts: [],
}

export const contactSlice = createSlice({
 name: "contacts",
 initialState,
 reducers: {
  contactAdded: {
   reducer(state, action) {
    console.log(state.contacts)
    state.contacts.push(action.payload)
   },
   prepare(firstName, lastName) {
    return {
     payload: {
      id: nanoid(),
      firstName,
      lastName
     }
    }
   }
  },
  contactRemoved: (state, action) => {
   console.log(state.contacts)
   state.contacts = state.contacts.filter(data => data.id !== action.payload)

  },
  contactEdit: {
   reducer(state, action) {
    console.log(action.payload)
    for (let x = 0; x < state.contacts.length; x++) {
     if (state.contacts[x].id === action.payload.id) {
      state.contacts[x].firstName = action.payload.firstName
      state.contacts[x].lastName = action.payload.lastName
     }
    }
   },
   prepare(id, firstName, lastName) {
    return {
     payload: {
      id,
      firstName,
      lastName,
     }
    }
   }
  }
 }
})

export const selectAllContacts = (state) => state.contacts.contacts
export const { contactAdded, contactRemoved, contactEdit } = contactSlice.actions

export default contactSlice.reducer