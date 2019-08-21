import React, { useState, useEffect } from 'react';

const Form = (props) => {
    const [memberList, setMemberList] = useState({});

    useEffect(() => {
        setMemberList(props.memberToEdit);
        console.log(props.memberToEdit);
        console.log(props.memberList.indexOf(props.memberToEdit));
        console.log(props.memberIndex);
    }, [props.memberToEdit])

    const handleChange = evt => {
        setMemberList({ ...memberList, [evt.target.name]: evt.target.value });
      };

    const handleSubmit = evt => {
        evt.preventDefault();
        const newMember = {
            ...memberList,
            //newMember appended to memberList
        };
        if (!props.memberToEdit) {
            props.addMember(newMember);
        } else props.editMember(newMember);
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