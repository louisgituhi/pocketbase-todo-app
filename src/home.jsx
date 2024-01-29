import TableComponent from "./table";
import useFetch from "./useFetch";
import { Spinner } from "flowbite-react";


const TaskHome = () => {
    const { tasks, isLoading } = useFetch()

    return ( 
        <div>
            { tasks && <TableComponent />}
            { isLoading && <Spinner aria-label="Default status example" /> }
        </div>
     );
}
 
export default TaskHome;