import { addTask, getTasks, removeTask } from '@/lib/tasks'
import { FiPlus, FiTrash2 } from 'react-icons/fi'

export default async function TodoApp() {

    const tasks = await getTasks()

    return (
        <div className="max-w-xl mx-auto p-6 space-y-6 h-screen l-screen w-full bg-center bg-cover h-[109vh]">
            <h1 className="text-3xl font-bold text-center text-amber-500 ">
                TO DO LIST
            </h1>

            {/*Add task */}
            <form action={addTask} className="flex gap-3 items-center">
                <input
                    name='title'
                    className='flex-1 px-3 py-2 rounded text-white border border-gray-3 focus:ring-2 focus:ring-amber-500'
                    placeholder='New task ...'
                />

                <button
                    type="submit"
                    className='px-4 py-2 bg-amber-500 rounded hover:bg-amber-200 transition scale-3d'
                >
                    <FiPlus size={20} />
                </button>
            </form>

            {/* Tasks list */}
            <ul className="space-y-3">
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className="flex justify-between items-center bg-white p-3 rounded"
                    >
                        <span>{task.title}</span>

                        <form action={removeTask.bind(null, task.id)}>
                            <button
                                type="submit"
                                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition scale-3d"
                            >
                                <FiTrash2 size={20} />
                            </button>
                        </form>
                    </li>
                ))}
            </ul>
        </div>
    )

}
