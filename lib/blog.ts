'use server'

import { db } from '@/db'
import { blogsTable } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'



export async function getPosts() {
    return await db.select().from(blogsTable)  // renvoie une promesse . car la tâche prend du temps à être réaliser !
}

export async function getPost(id: number) { // est définit comme un string UUID 
    return await db.select()
        .from(blogsTable)
        .where(eq(blogsTable.id, String(id)))
        .limit(1);
}

export async function createPost(form: FormData) {
    await db.insert(blogsTable)             // pas besoin de return lorsque le redirect est là ?
        .values({
            title: String(form.get('title')),
            post: false
        })
    redirect((await headers()).get('referer') ?? '/')
}

export async function editPost(form: FormData) {
    await db
        .update(blogsTable)
        .set({
            title: String(form.get('title')),
            post: form.get('post') === 'on'
        })
        .where(eq(blogsTable.id, String(form.get('id')))) // pour eq(), id doit être en String

}

export async function deletePost(id: number) {
    await db
        .delete(blogsTable)
        .where(eq(blogsTable.id, String(id)))
    redirect((await headers()).get('referer') ?? '/')
}

