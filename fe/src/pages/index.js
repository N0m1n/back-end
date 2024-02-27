import { useEffect, useState } from "react";

import { v4 as uuidv4, v4 } from "uuid";

export default function Home() {
  const API_ENDPOINT = "http://localhost:8080/user";

  const { v4: uuidv4 } = require("uuid");
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    email: "",
    id: "",
  });

  const [data, setData] = useState([]);

  // const isDisabledButton = name === "" || age === "";

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(API_ENDPOINT, {
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      });
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };
  const createData = async () => {
    const id = uuidv4();

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userData, id }),
      });
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };
  console.log(data);

  //   .then((response) => response.json());

  //   console.log(response);
  //   setData([...data, response]);
  // };

  const deleteData = async (id) => {
    try {
      const response = await fetch(`${API_ENDPOINT}/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      });
      const updatedData = data.filter((item) => item.id !== id);

      setData(updatedData);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const addData = () => {
    console.log(userData);
    createData();
  };

  const handleDelete = (id) => {
    deleteData(id);
    console.log(handleDelete);
  };

  return (
    <div className="w-full h-full container m-auto p-5 bg-white flex flex-col gap-5  justify-center items-center">
      <h1 className=" text-4xl text-cyan-500 font-bold">User Data </h1>
      <div className=" flex flex-row gap-5 items-center">
        <input
          type="text"
          onChange={(event) =>
            setUserData({ ...userData, name: event.target.value })
          }
          className="rounded-md  bg-gray-100  border-cyan-300 px-4 py-2"
          placeholder="Name"
        ></input>
        <input
          type="number"
          onChange={(event) =>
            setUserData({ ...userData, age: event.target.value })
          }
          className="rounded-md  bg-gray-100  border-cyan-300 px-4 py-2"
          placeholder="Age"
        ></input>
        <input
          type="email"
          onChange={(event) =>
            setUserData({ ...userData, email: event.target.value })
          }
          className="rounded-md  bg-gray-100  border-cyan-300 px-4 py-2"
          placeholder="Email Address"
        ></input>

        <button
          // disabled={isDisabledButton}
          onClick={addData}
          className=" bg-red-300 border-1 border-red-500 rounded-md px-4 py-2"
        >
          Submit
        </button>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 ">
        <table className="table table-auto border border-separate border-cyan-400 rounded-md justofy-between gap-4 ">
          <thead className="  gap-4">
            <tr className="*:py-2 *:px-4">
              <th>User Name</th>
              <th> Age</th>
              <th>Email</th>
              <th> Edit</th>
              <th>Delete </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((element, id) => (
              <tr className=" gap-4 *:py-2 *:px-4" key={element.id}>
                <td>{element.name}</td>
                <td>{element.age}</td>
                <td>{element.email}</td>
                <td>
                  <button
                    // onClick={editData}
                    className="bg-red-300 rounded-md px-4 py-2 "
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(element.id)}
                    className="bg-red-300  py-2 px-4 rounded-md "
                  >
                    -
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
