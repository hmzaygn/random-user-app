import React, { useEffect, useState } from "react";
import Card from "../Cards/Card";
import UserList from "../UserList/UserList";
import "./Home.css";

const Home = () => {
  const url = `https://randomuser.me/api/`;
  const [person, setPerson] = useState();
  const [addPerson, setAddPerson] = useState([]);

  const handleClick = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPerson(data.results[0]))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleClick();
  }, []);

  //   console.log(person);

  const handleAddUser = () => {
    if (!addPerson.includes(person)) {
      setAddPerson([...addPerson, person]);
    }
  };

  return (
    <div className="home">
      {person && <Card {...person} />}

      <div className="button-div">
        <button className="buttons" onClick={handleClick}>
          Random User
        </button>
        <button className="buttons" onClick={handleAddUser}>
          Add User
        </button>
      </div>

      <div className="table-container">
        {addPerson.length > 0 && <UserList addPerson={addPerson} />}
      </div>
    </div>
  );
};

export default Home;
