import "../../style/common/header.css";

function Header() {
  return (
    <header className="header">
      <h1>
        <div className="logo">logo</div>
      </h1>
      <nav className="gnb_menu">
        <ul className="menu">
          <li className="menu_list">Home</li>
          <li className="menu_list">Project</li>
          <li className="menu_list">Skill</li>
          <li className="menu_list">Contact</li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
