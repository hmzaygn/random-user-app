import React, { useState } from "react";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { FaBirthdayCake, FaCity } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { BsFillCalendarDateFill } from "react-icons/bs";
import "./Cards.css";

const Card = (person) => {
  const [screen, setScreen] = useState({
    name: false,
    mail: false,
    phone: false,
    city: false,
    age: false,
    registerDate: false,
  });
  const { picture, name, email, phone, location, dob, registered } = person;
  //   console.log(person);
  return (
    <div className="card text-center">
      <div className="img-div">
        <img src={picture.large} />
      </div>

      <div className="display-screen">
        {screen.name && (
          <div>
            <h3>Name</h3>
            <p>
              {name.title} {name.first} {name.last}
            </p>
          </div>
        )}

        {screen.mail && (
          <div>
            <h3>Email</h3>
            <p className="email">{person && email}</p>
          </div>
        )}

        {screen.phone && (
          <div>
            <h3>Phone</h3>
            <p>{phone}</p>
          </div>
        )}

        {screen.city && (
          <div>
            <h3>Location</h3>
            <p>
              {location.city} / {location.country}
            </p>
          </div>
        )}

        {screen.age && (
          <div>
            <h3>Age</h3>
            <p>{dob.age}</p>
          </div>
        )}

        {screen.registerDate && (
          <div>
            <h3>Register Date</h3>
            <p>{new Date(registered.date).toDateString()}</p>
          </div>
        )}
      </div>
      <div className="icon-container">
        <BiUserCircle
          className="icons"
          onMouseEnter={() => setScreen({ ...screen, name: true })}
          onMouseLeave={() => setScreen({ ...screen, name: false })}
        />

        <AiOutlineMail
          className="icons"
          onMouseEnter={() => setScreen({ ...screen, mail: true })}
          onMouseLeave={() => setScreen({ ...screen, mail: false })}
        />

        <AiFillPhone
          className="icons"
          onMouseEnter={() => setScreen({ ...screen, phone: true })}
          onMouseLeave={() => setScreen({ ...screen, phone: false })}
        />

        <FaCity
          className="icons"
          onMouseEnter={() => setScreen({ ...screen, city: true })}
          onMouseLeave={() => setScreen({ ...screen, city: false })}
        />

        <FaBirthdayCake
          className="icons"
          onMouseEnter={() => setScreen({ ...screen, age: true })}
          onMouseLeave={() => setScreen({ ...screen, age: false })}
        />

        <BsFillCalendarDateFill
          className="icons"
          onMouseEnter={() => setScreen({ ...screen, registerDate: true })}
          onMouseLeave={() => setScreen({ ...screen, registerDate: false })}
        />
      </div>
    </div>
  );
};

export default Card;
