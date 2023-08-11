import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <h2>Is Takip</h2>
        <div>
          <NavLink to={"/"}>Is Listesi</NavLink>
          <NavLink to={"/addjob"}>Is Ekle</NavLink>
        </div>
      </header>
    </>
  );
}
