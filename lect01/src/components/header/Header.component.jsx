import "./Header.css";

const Header = (props) => {
  const { name } = props;
  return (
    <div className="header">
      <h1 className="headerField">{name}</h1>
    </div>
  );
};

export default Header;
