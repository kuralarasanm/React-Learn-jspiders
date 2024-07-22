import '../styles/Landingpage.css'
import {Link} from 'react-router-dom'
import img from '../images/images.png'
import img1 from '../images/images.jpeg'
const Landingpage = () => {
    return ( 
        <div className="landingpage">
            <h1>Libarary management system</h1>
            <div className='link'>
                <div className="link1">
                
            <Link to="/admin" ><img src={img} alt="" /></Link>
                </div>
                <div className="link2">
                    
                <Link to="/user"><img src={img1} alt=""/></Link>
                </div>
            
            </div>
            
        </div>
     );
}
 
export default Landingpage;