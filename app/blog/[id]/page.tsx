import { getPost, getPosts } from "@/lib/blog"


type BlogAppProps = {
    params: Promise<{ id: string }>
}

export default async function BlogApp(props: BlogAppProps) {
    const id = String((await props.params).id)
    const posts = await getPost(id)
    const poster = posts[0]
    if (!poster) return <p>Hello voici vos données :  {id} {JSON.stringify(poster, null, 2)} </p>
    return (
        <section className="max-w-2xl mx-auto px-6 py-20 space-y-10">
            <h1 className="text-3xl font-bold text-center text-amber-500 ">
                {poster.title}
            </h1>

            <label>
                <textarea
                    name="content"
                    rows={9}
                    value={poster.content}
                    className="w-full rounded-lg border p-3 bg-amber-100"
                />
            </label>

            {poster.content}
        </section>
    )
}
