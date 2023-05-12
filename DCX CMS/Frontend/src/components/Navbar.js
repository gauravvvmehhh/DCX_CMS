
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Dropdown,
} from "react-bootstrap";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navi(props) {
  const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
  console.log(loggedInUser);

  const History = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("loggedInUser");
    History("/");
  };

  return (
    <div>
      <Navbar bg="primary" variant={"dark"} expand="lg">
        <Navbar.Brand href="/Dashboard" style={{fontFamily:'TimesNewRoman'}}>{props.data}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" />
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        ></Nav>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/Dashboard" style={{fontFamily:'Comic Sans MS'}}>
              Dashboard
            </Nav.Link>

            <Nav.Link as={Link} to="/Page" style={{fontFamily:'Comic Sans MS'}}>
              Pages
            </Nav.Link>
            <Nav.Link as={Link} to="/Category" style={{fontFamily:'Comic Sans MS'}}>
              Categories
            </Nav.Link>
            <Nav.Link as={Link} to="/User" style={{fontFamily:'cursive'}}>
              Users
            </Nav.Link>
          </Nav>
          <Form className="my-form">
            <FormControl type="search" placeholder="Search" className="me-2" />
            <Button variant="success">Search</Button>
          </Form>
          <Dropdown className="drop">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              My Account
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                {loggedInUser ? loggedInUser.username : "Log In"}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button onClick={handleLogout}>Logout</Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
