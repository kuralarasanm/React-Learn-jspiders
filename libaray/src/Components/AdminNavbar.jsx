import { Link } from "react-router-dom";
import  r from "../images/book.png";
import '../styles/Adminnavbar.css'
const AdminNavbar = () => {
    return ( 
        <div className="adminnavbar">
            <div className="adminnavbar1">
            <div className="adminlogo">
                <img src={r} alt="" />
            </div>
            <div className="navlinks">
                <Link to="/adminhome">Home</Link>
                <Link to="/adminhome/viewlist">viewlist</Link>
                <Link to="/adminhome/addbooks">add books</Link>
                {/* <Link to="/adminhome/updatebooks">updatebooks</Link> */}
                <Link to="/">logout</Link>
                
            </div>
            </div>
        </div>
     );
}
 
export default AdminNavbar;