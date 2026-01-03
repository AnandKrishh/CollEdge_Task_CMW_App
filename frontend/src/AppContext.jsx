import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react' 

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [addBtnClicked, setAddBtnClicked] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: "",
    })


    const [contactList, setContactList] = useState([]);


    const fetchContactList = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/contacts');
            console.log(res.data);
            setContactList(res.data);
        } catch (err) {
            console.error('Failed to fetch contacts:', err);
        }
    }

    useEffect(() => {
        fetchContactList();
    }, []);




const value = { addBtnClicked, setAddBtnClicked, formData, setFormData, contactList, setContactList }

return (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
);
}

export default AppContextProvider