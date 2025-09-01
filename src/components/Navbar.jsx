import { Link } from "react-router-dom";
const Navbar = () => {
  const Menu = [
    { id: 1, name: "Home", Link: "/" },
    { id: 2, name: "About", Link: "/about" },
    { id: 2, name: "Contact", Link: "/contact" },
  ];
  return (
    <div className="bg-blue-300 shadow-2xl  ">
      <div className="flex items-center justify-around">
        <div>
          <Link to="/">TES SLILD</Link>
        </div>
        <ul className="flex  gap-10">
          {Menu.map((item) => (
            <Link to={item.Link}>{item.name}</Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
