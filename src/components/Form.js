import React, { useState } from 'react';

const Form = (props) => {
    const [memberList, setMemberList] = useState( { name: "", email: "", role: "" });

    const handleChange = evt => {
        setMemberList({ ...memberList, [evt.target.name]: evt.target.value });
      };

    const handleSubmit = evt => {
        evt.preventDefault();
        const newMember = {
            ...memberList,
            //newMember appended to memberList6
        };
        props.addMember(newMember);
      };

    return (
        <form onSubmit={evt => handleSubmit(evt)}>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={props.memberList.name}
                    onChange={evt => handleChange(evt)}
                />
            </label>
            <label>
                Email:
                <input
                    type="text"
                    name="email"
                    value={props.memberList.email}
                    onChange={evt => handleChange(evt)}
                />
            </label>
            <label>
                Role:
                <input
                    type="text"
                    name="role"
                    value={props.memberList.role}
                    onChange={evt => handleChange(evt)}
                />
            </label>
            <button>Submit</button>
        </form>
    );
}

export default Form;