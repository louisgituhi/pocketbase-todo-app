import { Link } from "react-router-dom"

const NavigationBar = () => {

    return ( 
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link className=" ml-8" to="/add-task">Add Task</Link>
            </nav>
        </div>
     );
}
 
export default NavigationBar;