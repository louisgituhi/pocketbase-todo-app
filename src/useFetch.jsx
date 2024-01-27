import { useEffect, useState } from "react";
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090').autoCancellation(false);


const useFetch = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        pb.collection('tasks')
        .getFullList({
            sort: '-created',
        })
        .then((response) => {
            setTasks(response);
        })
        .catch((e) => {
            console.log(e.message);
        })

    }, [])

    return { tasks }
}
 
export default useFetch;