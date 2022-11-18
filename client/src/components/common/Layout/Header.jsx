import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="bg-[#282c34] ">
      <Link to={'/'}><h1 className="text-center text-5xl text-white">Pokedex</h1></Link>
      <h2 className="text-white text-center">Astudillo Perez Edwin Uriel</h2>
    </div>
  );
}
