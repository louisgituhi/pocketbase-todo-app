import { Table } from "flowbite-react"
import useFetch from "./useFetch";
import PocketBase from "pocketbase";


const TableComponent = () => {
  
  const { tasks } = useFetch();
  const pb = new PocketBase('http://127.0.0.1:8090')

  const handleDelete = (task) => {
    pb.collection("tasks")
    .delete(task.id)
    .then(() => {
    alert("Task has been deleted")
    })
    .catch((e) => {
    alert("unable to delete task" + e.message)
    })
  }

    return ( 
        <div className="overflow-x-auto">
      <Table className=" font-ibm">
        <Table.Head>
          <Table.HeadCell>Task Name</Table.HeadCell>
          <Table.HeadCell>Type</Table.HeadCell>
          <Table.HeadCell>Deadline</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>

      { tasks.map((task) => (
        
        <Table.Body className="divide-y" key={ task.id }>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {task.Task_Name}
            </Table.Cell>
            <Table.Cell>{ task.Type }</Table.Cell>
            <Table.Cell> { task.Deadline.slice(0, 10) }</Table.Cell>
            <Table.Cell>
              <button className="font-bold p-2 bg-green-400 rounded-md text-black hover:underline dark:text-cyan-500">
                Edit
              </button>
            </Table.Cell>
            <Table.Cell>
              <button className="font-bold p-2 bg-red-600 rounded-md text-white hover:underline dark:text-cyan-500"
                 onClick={() => {handleDelete(task)}}>
                Delete
              </button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>

      ))}

      </Table>
    </div>
     );
}
 
export default TableComponent;