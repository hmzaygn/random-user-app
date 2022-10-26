import React from "react";

const UserList = ({ addPerson }) => {
  console.log(addPerson);
  //   const { name, email, phone, dob } = addPerson[0];
  return (
    <table className="table table-primary table-striped table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {addPerson.map((item, index) => {
          const { name, email, phone, dob } = item;
          return (
            <tr key={index}>
              <td>
                {name.first} {name.last}
              </td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>{dob.age}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserList;
