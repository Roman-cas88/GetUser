import { useState } from "react";

export const Users = () => {
  const [avatar, setAvatar] = useState();
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();

  async function userFetch() {
    let urlId = Math.ceil(Math.random() * 6);
    let url = " https://reqres.in/api/users/" + urlId;
    const res = await fetch(url);
    const resData = await res.json();

    let data = resData.data;

    setAvatar(data.avatar, avatar);
    setName(data.first_name, name);
    setSurname(data.last_name, surname);
    setEmail(data.email, email);
  }

  return (
    <div>
      <img src={avatar} alt="" />
      <h2>
        {name} {surname}
      </h2>
      <p>{email}</p>
      <button onClick={userFetch}>Get User</button>
    </div>
  );
};
