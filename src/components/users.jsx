import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";

const Users = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://reqres.in/api/users?page=1");
      const jsonData = await response.json();
      setData(jsonData.data);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <nav>
        <h1>LGM USERS</h1>
        <button onClick={fetchData}>Get Users</button>
      </nav>
      <p style={{ textAlign: "center" }}>
        Click on Get Users to get the data...
      </p>
      {loading ? (
        <div style={{ textAlign: "center" }}>
          <div id="center">
            <TailSpin color="#00BFFF" height={50} width={50} />
          </div>
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          <div id="disp">
            {data.map((user) => (
              <div key={user.id}>
                <img src={user.avatar} alt={user.first_name} />
                <h3>
                  {user.first_name} {user.last_name}
                </h3>
                <p>{user.email}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      ;
    </div>
  );
};

export default Users;
