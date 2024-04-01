import React from 'react';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';
import {useSelector} from 'react-redux';

const ContactList = () => {
    const contactList = useSelector((state) => state.contactList);
    const searchName = useSelector((state) => state.searchName);
    return (
        <div>
            <div className="search-box">
                <SearchBox/>
            </div>
            <div>num: {searchName === '' ? contactList.length : contactList.filter((item) => item.name.includes(searchName)).length}</div>
            { searchName === '' ?
                contactList.map(item => <ContactItem item={item}/>) : 
                contactList.filter((item) => item.name.includes(searchName)).map(item => <ContactItem item={item}/>) }
        </div>
    )
}

export default ContactList
