import { Routes,Route } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import AdminNavbar from "./AdminNavbar";
import ViewList from "./ViewList";
import AddBooks from "./AddBooks";
import UpdateBooks from "./UpdateBooks";
import ReadBook from "./ReadBook";
const AdminHome = () => {
    return ( 
        <div className="adminhome">
            {/* <h1>adminhome</h1> */}
            <AdminNavbar/>
            <Routes>
                <Route path="/viewlist" element={<ViewList/>}/>
                <Route path="/addbooks" element={<AddBooks/>}/>
                <Route path="/updatebooks/:id" element={<UpdateBooks/>}/>
                <Route path="/" element={<AdminDashboard/>}/>
                <Route path="/viewlist/:id" element={<ReadBook/>}/>
                
            </Routes>
        </div>
     );
}
 
export default AdminHome;