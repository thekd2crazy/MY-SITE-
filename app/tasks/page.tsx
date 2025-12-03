import { addTask, getTasks, removeTask } from '@/lib/tasks'
export default async function TodoApp() {
    const tasks = await getTasks()
    return (
        <>
            <h1 className='justify-center caret-amber-500'>TO DO LIST</h1>
            <form action={addTask}>
                <label>
                    New task: <input name="title" />
                </label>
                <button className='border-r-red-500 hover:bg-red-500 '>Submit</button>
            </form>
            <ul>
                {tasks.map((task, id) => (
                    <form action={removeTask.bind(null, task.id)} key={id}>
                        <li>{task.title}</li>
                        <button>
                            Delete task
                        </button>
                    </form>
                ))}
            </ul>
        </>
    )
}