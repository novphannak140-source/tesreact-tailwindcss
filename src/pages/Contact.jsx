import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Contact = ({ user }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="grid grid-cols-4  gap-5 items-center justify-center ">
      {data.map((item) => (
        <Link
          key={`/users/${item.id}`}
          className="w-[300px] bg-red-500 rounded-2xl shadow-2xl flex flex-col justify-center hover:scale-101 duration-300  items-centern hover:shadow-lg transition-all p-3  "
        >
          <img src={item.image} alt="" />
          <div>{item.title}</div>
          <div>{item.description}</div>
          <div>{item.price}</div>
        </Link>
      ))}
    </div>
  );
};

export default Contact;
