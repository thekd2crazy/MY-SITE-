"use client"
import { useState } from "react";
import TypingEffect from "../components/TypingEffet";

export default function BlogEditor() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ title, content });
    };

    return (
        <section className="max-w-7xl mx-auto px-6 py-9 ">
            <h1 className="text-center text-base"><TypingEffect text="MON BLOG" /></h1>
            <form
                onSubmit={handleSubmit}
                className="mx-auto max-w-3xl space-y-4 p-6"
            >
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder="Titre de l’article"
                    className="w-full rounded-lg border p-3 bg-amber-100"
                />

                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={12}
                    placeholder="Contenu de l’article"
                    className="w-full rounded-lg border p-3 bg-amber-100"
                />

                <button
                    type="submit"
                    className="rounded-lg bg-orange-500 px-6 py-2 text-white hover:bg-orange-300"
                >
                    Publier
                </button>
            </form>
        </section>
    );
}
