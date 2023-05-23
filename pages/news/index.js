import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import axios from "axios";

const index = () => {
  const uri = `${process.env.NEXT_PUBLIC}/api/news`;
  const [data, setData] = useState(null);
  //javascript
  useEffect(() => {
    //code
    loadData();
  }, []);

  const loadData = async () => {
    //code
    await axios
      .get(uri)
      .then((res) => {
        console.log(res.data.listUsers);
        setData(res.data.listUsers);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <hr />
      <ul>
        {data &&
          data.map((item, index) => <li key={index}>{item.first_name}</li>)}
      </ul>
    </>
  );
};

export default index;
