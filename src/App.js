import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";
import Profile from "./components/Profile";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; 

function App() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://602e7c2c4410730017c50b9d.mockapi.io/users"
        );
        setUserData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    const override = css`
      display: block;
      margin: 0 auto;
      border-color: red;
    `;

    return (
      <div className="content_container">
        <ClipLoader
          color={"#123abc"}
          loading={isLoading}
          css={override}
          size={150}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="content_container error">
        <div>Error: {error}</div>
      </div>
    );
  }

  return (
    <div
      className="container-fluid  flex flex-column justify-center p-5 "
      style={{}}
    >
      <h1
        className="text-center"
        style={{
          fontFamily: "Arial, sans-serif",
          fontWeight: "bold",
          fontSize: "2rem",
          color: "#333",
        }}
      >
        Users
      </h1>
      <div className="row flex align-items-center  flex flex-column">
        {userData ? (
          userData.map((user) => {
            return <Profile user={user} key={user.id} />;
          })
        ) : (
          <h1>No user Found</h1>
        )}
      </div>
    </div>
  );
}

export default App;
