"use client"


import React, { useState } from "react";

interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    // handleChange is for inputs / textarea
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const name = e.target.name as keyof FormData;
        const value = e.target.value;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // handleSubmit is for the form submit
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section className="max-w-7xl mx-auto px-6 py-9 ">
            <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
                <h1 className="text-2xl font-bold mb-6 text-center">Contactez-moi</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Nom</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-orange-500 text-white rounded-md hover:bg-orange-300 transition-colors"
                    >
                        Envoyer
                    </button>
                </form>
            </div>
        </section>
    );
}
