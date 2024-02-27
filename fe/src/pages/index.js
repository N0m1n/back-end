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

  const [email, setEmail] = useState("");

  const isDisabledButton = name === "" || age === "";

  // useEffect(()=>{
  //   getData ();

  // },[]);

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
      setData([...data, responseData]);
      console.log(responseData);
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };

  //   .then((response) => response.json());

  //   console.log(response);
  //   setData([...data, response]);
  // };

  // const deleteData = async (id) => {
  //   const response1 = fetch(`${API_ENDPOINT}/${id}`, {
  //     method: "DELETE",
  //     headers: {
  //       Accept: "application/json, text/plain, */*",
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         Error("Network response was not ok");
  //       }
  //     })
  //     .then((user) => {
  //       const updatedData = data.filter((item, id) => id !== id);
  //       setData(updatedData);
  //       response.json();
  //       // Handle the response data, maybe update the UI accordingly
  //       console.log("Deleted user:", user);
  //     })
  //     .catch((error) => {
  //       console.error("There was a problem with the fetch operation:", error);
  //     });
  // };

  const addData = () => {
    console.log(userData);
    createData();
  };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const handleDelete = (id) => {
    deleteData(id);
    console.log(handleDelete);
  };

  return (
    <div className="w-full h-full container m-auto p-5 bg-white flex flex-col gap-5 items-cneter">
      <div className=" flex flex-row gap-5 items-cneter">
        <input
          type="text"
          onChange={(event) =>
            setUserData({ ...userData, name: event.target.value })
          }
          className="rounded-md  bg-gray-300  border-gray-600 px-4 py-2"
          placeholder="Name"
        ></input>
        <input
          type="number"
          onChange={(event) =>
            setUserData({ ...userData, age: event.target.value })
          }
          className="rounded-md  bg-gray-300 border-1 border-solid border-gray-600 px-4 py-2"
          placeholder="Age"
        ></input>
        <input
          type="email"
          onChange={(event) =>
            setUserData({ ...userData, email: event.target.value })
          }
          className="rounded-md  bg-gray-300 border-1 border-solid border-gray-600 px-4 py-2"
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

      <div className="flex flex-col itens-center justify-center gap-2 table-auto">
        <table className="flex table-auto border-collapse flex-col gap-4 ">
          <thead className=" gap-4">
            <tr>
              <th>User Name</th>
              <th> Age</th>
              <th>Email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((element, id) => (
              <tr key={element.id}>
                <td>{element.name}</td>
                <td>{element.age}</td>
                <td>{element.email}</td>
                <button
                  // onClick={editData}
                  className="bg-red-300 rounded-md px-5 py-1"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(element.id)}
                  className="bg-red-300 rounded-md px-5 py-1"
                >
                  Delete
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
