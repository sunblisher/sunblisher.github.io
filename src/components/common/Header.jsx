import "../../style/components/header.css";

function Header() {
  return (
    <header className="header">
      <nav className="c_inner">
        <ul className="menu">
          <li className="list_item">
            <span>Home</span>
          </li>
          <li className="list_item">
            <span>Project</span>
          </li>
          <li className="list_item">
            <span>Skill</span>
          </li>
          <li className="list_item">
            <span>Contact</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
