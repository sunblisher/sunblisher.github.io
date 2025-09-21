import "../../style/components/header.css";

function Header() {
  return (
    <header className="header">
      <nav className="c_inner">
        <ul className="menu">
          <li className="list_item">Home</li>
          <li className="list_item">Project</li>
          <li className="list_item">Skill</li>
          <li className="list_item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
