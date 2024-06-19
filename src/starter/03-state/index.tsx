import { useState } from "react";

type Link = {
  id: number;
  title: string;
  path: string;
}

const navLinks = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About", path: "/about" },
  { id: 3, title: "Contact", path: "/contact" },
]

function Component() {
  const [links, setLinks] = useState<Link[]>(navLinks);
  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <button className="btn btn-center" onClick={() => {
        setLinks([...links, {id:4, title:"Contact", path:"/contact"}]);
      }}>click me</button>
    </div>
  );
}
export default Component;
