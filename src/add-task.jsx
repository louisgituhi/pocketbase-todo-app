import PocketBase from "pocketbase"
import { Label, TextInput, Select, Datepicker, Button } from "flowbite-react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddTask = () => {

    const [task, setTask] = useState('')
    const [type, setType] = useState('Personal')
    const [deadline, setDeadline] = useState("")
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()

        const pb = new PocketBase('http://127.0.0.1:8090');

        const data = {
            Task_Name: task,
            Type: type,
            Deadline: deadline,
        }

        pb.collection("tasks")
        .create(data)
        .then(() => {
            console.log('Task created');
            history.push("/")
        })
        .catch((e) => {
            console.log(e.message)
        })
    }

    return ( 

     <div>
        <form className=" flex max-w-md flex-col gap-4 mx-auto" onSubmit={ handleSubmit}>

            <div className="mb-2 block">
            <Label htmlFor="Task Name" value="Enter Task Name" />
            </div>
            <TextInput id="small" type="text" sizing="sm" 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
            />

            <div className="mb-2 block">
            <Label htmlFor="category" value="Select Task Type" />
            </div>
            <Select id="category" required
               value={type} 
               onChange={(e) => setType(e.target.value)} >
                <option value='Personal' >Personal</option>
                <option value='Professional' >Professional</option>
            </Select>

            <Label htmlFor="Pick Date" value="Pick date" />

            <input type="date"
            value={ deadline }
            onChange={(e) => setDeadline(e.target.value)} 
            >
            </input>
            
            <Button type="submit" color="dark">Add Task</Button>


            <p>{task}</p>
            <p>{type}</p>
            <p>{deadline}</p>

        </form>
      </div>
     );
}
 
export default AddTask;