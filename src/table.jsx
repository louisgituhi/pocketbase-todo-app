import { Table } from "flowbite-react"
import useFetch from "./useFetch";


const TableComponent = () => {
  
  const { tasks } = useFetch();

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
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Delete
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>

      ))}

      </Table>
    </div>
     );
}
 
export default TableComponent;