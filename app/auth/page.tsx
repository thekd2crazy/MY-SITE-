'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { login, register } from '@/lib/auth'

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setError('')
        setLoading(true)

        const formData = new FormData(e.currentTarget)

        try {
            const result = await login(formData)
            if (result?.error) {
                setError(result.error)
            }
        } catch (err) {
            // Si redirect est appelé, cela lance une erreur
            // qui sera capturée ici, c'est normal
        } finally {
            setLoading(false)
        }
    }

    async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setError('')
        setLoading(true)

        const formData = new FormData(e.currentTarget)

        try {
            const result = await register(formData)

            if (result?.error) {
                setError(result.error)
            } else if (result?.success) {
                // Inscription réussie, maintenant on se connecte
                const loginResult = await login(formData)
                if (loginResult?.error) {
                    setError(loginResult.error)
                }
            }
        } catch (err) {
            // Si redirect est appelé, cela lance une erreur
            // qui sera capturée ici, c'est normal
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    {isLogin ? 'Connexion' : 'Inscription'}
                </h1>

                {error && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                        {error}
                    </div>
                )}

                {isLogin ? (
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <input
                                name="login"
                                required
                                placeholder="Login"
                                className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
                                disabled={loading}
                            />
                        </div>
                        <div>
                            <input
                                name="password"
                                type="password"
                                placeholder="Mot de passe"
                                required
                                className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
                                disabled={loading}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full h-12 bg-orange-500 text-white rounded-full font-semibold hover:text-orange-500  hover:bg-orange-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Connexion...' : 'Se connecter'}
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleRegister} className="space-y-4">
                        <div>
                            <input
                                name="login"
                                required
                                placeholder="Login"
                                className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
                                disabled={loading}
                            />
                        </div>
                        <div>
                            <input
                                name="password"
                                type="password"
                                placeholder="Mot de passe"
                                required
                                className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
                                disabled={loading}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full h-12 bg-orange-300 text-white rounded-full font-semibold hover:text-orange-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Inscription...' : "S'inscrire"}
                        </button>
                    </form>
                )}

                <button
                    onClick={() => {
                        setIsLogin(!isLogin)
                        setError('')
                    }}
                    className="mt-4 text-orange-300 hover:text-orange-500 transition-colors"
                    disabled={loading}
                >
                    {isLogin ? "Créer un compte" : "Déjà un compte ?"}
                </button>
            </div>
        </div>
    )
}