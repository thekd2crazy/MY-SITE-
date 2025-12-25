import { addTask, editTask, getTasks, removeTask } from '@/lib/tasks'
import { FiPlus, FiTrash2, FiEdit } from 'react-icons/fi'
import TypingEffect from '../components/TypingEffet'

export default async function TodoApp() {

    const tasks = await getTasks()

    return (
        <section className="max-w-2xl mx-auto px-6 py-9 space-y-5">
            <h1 className="text-3xl font-bold text-center text-amber-500 ">
                <TypingEffect text='TO DO LIST' />
            </h1>

            {/*Add task */}
            <form action={addTask} className="flex gap-3 items-center">
                <input
                    name='title'
                    className='flex-1 px-3 py-2 w-96 rounded text-white border border-gray-3 focus:ring-2 focus:ring-amber-500'
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
                        <form action={editTask} className='justify-between space-x-40 '>
                            <input
                                type='hidden'
                                value={task.id}
                                name='id'
                            />
                            <input
                                name='done'
                                type='hidden'
                                value={task.done ? "on" : ""}
                            />
                            <input
                                name='title'
                                defaultValue={task.title}
                                className="flex-1 px-5 py-2 rounded text-black border border-gray-300
                                            focus:ring-2 focus:ring-amber-500 w-85"
                            />

                            <button type="submit" className="px-3 py-1  bg-red-500 text-white rounded ml-auto hover:bg-red-600 transition scale-3d">
                                <FiEdit size={20} />
                            </button>

                        </form>

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

        </section>
    )

}
