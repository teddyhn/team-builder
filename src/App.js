import React, { useState } from 'react';
import './App.css';

import Form from './components/Form';

import { data } from './data/data';

function App() {
  const [memberList, setMemberList] = useState(data);
  const [memberToEdit, setMemberToEdit] = useState({});

  const addMember = member => {
    setMemberList([ ...memberList, member ]);
  };

  return (
    <div className="App">
      <div className="member-list">
        {memberList.map(member => {
          return (
            <div className="member">
              <p>{member.name}</p>
              <p>{member.email}</p>
              <p>{member.role}</p>
              <button onClick={() => setMemberToEdit(member)}>Edit</button>
            </div>
          );
        })}
      </div>
      <Form 
        memberList={memberList}
        setMemberList={setMemberList}
        addMember={addMember}
        memberToEdit={memberToEdit}
      />
    </div>
  );
}

export default App;
