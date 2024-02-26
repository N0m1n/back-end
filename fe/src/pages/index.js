import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState();

  const createData = async () => {
    const response = await fetch("http://localhost:8080/user", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age }),
    }).then((response) => response.json());
    console.log(response);
    setData(response);
  };

  const deleteData = async (indexToDelete) => {
    const response = fetch(`http://localhost:8080/user/${indexToDelete}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          Error("Network response was not ok");
        }
      })
      .then((user) => {
        const updatedData = data.filter(
          (item, index) => index !== indexToDelete
        );
        setData(updatedData);
        response.json();
        // Handle the response data, maybe update the UI accordingly
        console.log("Deleted user:", user);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const addData = () => {
    console.log(name, age);
    createData();
  };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const handleDelete = (index) => {
    deleteData(index);
    console.log(handleDelete);
  };

  return (
    <div className="w-full h-full container m-auto p-5 bg-white flex flex-col gap-5 items-cneter">
      <div className=" flex flex-row gap-5 items-cneter">
        <input
          form="text"
          onChange={(event) => setName(event.target.value)}
          className="rounded-md  bg-gray-300  border-gray-600 px-4 py-2"
          placeholder="Name"
        ></input>
        <input
          form="number"
          onChange={(event) => setAge(event.target.value)}
          className="rounded-md  bg-gray-300 border-1 border-solid border-gray-600 px-4 py-2"
          placeholder="Age"
        ></input>
        <button
          onClick={addData}
          className=" bg-red-300 border-1 border-red-500 rounded-md px-4 py-2"
        >
          Submit
        </button>
      </div>

      <ul className="flex flex-col itens-center justify-center gap-2">
        {data?.map((element, index) => (
          <div key={index} className="flex flex-row gap-4 ">
            <li>{element.name}</li>
            <li>{element.age}</li>
            <button
              // onClick={editData}
              className="bg-red-300 rounded-md px-5 py-1"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(index)}
              className="bg-red-300 rounded-md px-5 py-1"
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
