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

  //     const resData = await data.json();

  //     console.log("success", resData);
  //     return resData;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const addData = () => {
    console.log(name, age);
    createData();
  };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="w-full h-full container m-auto p-5 bg-white flex flex-row gap-5 items-cneter">
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

      <ul className="flex flex-row itens-center justify-center gap-2">
        {data?.map((element) => (
          <>
            <li>{element.name}</li>
            <li>{element.age}</li>
          </>
        ))}
      </ul>
    </div>
  );
}
