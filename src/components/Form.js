import React, { useState, useEffect } from 'react';

const Form = (props) => {
    const [memberList, setMemberList] = useState({});

    useEffect(() => {
        setMemberList(props.memberToEdit);
    }, [props.memberToEdit])

    const handleChange = evt => {
        setMemberList({ ...memberList, [evt.target.name]: evt.target.value });
      };

    const handleSubmit = evt => {
        evt.preventDefault();
        evt.target.reset();
        const newMember = {
            ...memberList,
            //newMember appended to memberList
        };

        if (!newMember.name || !newMember.email || !newMember.role) {
            alert('Fields cannot be left blank.');
        } else {
            if (Object.keys(props.memberToEdit).length === 0) {
                props.addMember(newMember);
            } else props.editMember(newMember);
        }
      };

    return (
        <form onSubmit={evt => handleSubmit(evt)}>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={memberList.name}
                    onChange={evt => handleChange(evt)}
                />
            </label>
            <label>
                Email:
                <input
                    type="text"
                    name="email"
                    value={memberList.email}
                    onChange={evt => handleChange(evt)}
                />
            </label>
            <label>
                Role:
                <input
                    type="text"
                    name="role"
                    value={memberList.role}
                    onChange={evt => handleChange(evt)}
                />
            </label>
            <button>Submit</button>
        </form>
    );
}

export default Form;