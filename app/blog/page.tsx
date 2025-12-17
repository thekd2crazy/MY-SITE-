
import { blogsTable } from "@/db/schema";
import TypingEffect from "../components/TypingEffet";
import { createPost, deletePost, editPost, getPosts } from "@/lib/blog";
import { FiEdit, FiPlus, FiTrash2 } from "react-icons/fi";
import { db } from "@/db";

export default async function BlogEditor() {

    const posts = await db.select().from(blogsTable)

    return (
        <section className="max-w-4xl mx-auto px-6 py-9 ">
            <h1 className="text-center text-base"><TypingEffect text="MON BLOG" /></h1>
            {/*Add task */}
            <form action={createPost} className="mx-auto max-w-3xl space-y-4 p-6">
                <input
                    name='title'
                    type="text"
                    placeholder="Titre de l’article"
                    className="w-full rounded-lg border p-3 bg-amber-100"
                />
                <textarea
                    name="content"
                    rows={9}
                    placeholder="Contenu de l’article"
                    className="w-full rounded-lg border p-3 bg-amber-100"
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
                {posts.map((post) => (
                    <li
                        key={post.id}
                        className="flex justify-between mx-auto items-center bg-white p-3 rounded"
                    >
                        <form action={editPost} className='justify-between space-x-40 '>
                            <div className="flex items-center space-x-10 space-y-2">
                                <input
                                    readOnly
                                    value={post.id}
                                    name='id'
                                />
                                <input
                                    name='post'
                                    type='hidden'
                                    value={post.post ? "post" : " "}
                                />
                                <input
                                    name='title'
                                    defaultValue={post.title}
                                    className="flex-1 px-5 py-2 rounded text-black border border-gray-300
                                                focus:ring-2 focus:ring-amber-500"
                                />
                            </div>

                            <input
                                name="content"
                                defaultValue={post.content}
                                className="w-full h-6 rounded-lg border p-3 bg-amber-100"
                            />


                            <button type="submit" aria-label="Editer ..." className="px-3 py-1  bg-red-500 text-white rounded ml-auto hover:bg-red-600 transition scale-3d">
                                <FiEdit size={20} />
                            </button>

                        </form>

                        <form action={deletePost.bind(null, post.id)}>
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

    );
}
