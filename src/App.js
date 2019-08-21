import React, { useState } from 'react';
import './App.css';

import Form from './components/Form';

import { data } from './data/data';

function App() {
  const [memberIndex, setMemberIndex] = useState();
  const [memberList, setMemberList] = useState(data);
  const [memberToEdit, setMemberToEdit] = useState({});

  const addMember = member => {
    setMemberList([ ...memberList, member ]);
    setMemberToEdit({});
  };

  const editMember = edited => {
    memberList.map(member => {
      if (memberIndex === memberList.indexOf(member)) {
        member.name = edited.name;
        member.email = edited.email;
        member.role = edited.role;
      }
    })

    setMemberList([ ...memberList ]);
    setMemberToEdit({});
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Team Builder</h1>
      </div>
      <div className="member-list">
        {memberList.map(member => {
          return (
            <div className="member">
              <p>{member.name}</p>
              <p>{member.email}</p>
              <p className="role">{member.role}</p>
              <button onClick={() => {
                        setMemberToEdit(member);
                        setMemberIndex(memberList.indexOf(member))
                      }}
              >
                Edit
              </button>
            </div>
          );
        })}
      </div>
      <div className="form-container">
        <Form 
          addMember={addMember}
          editMember={editMember}
          memberToEdit={memberToEdit}
          memberList={memberList}
          memberIndex={memberIndex}
        />
      </div>
    </div>
  );
}

export default App;
