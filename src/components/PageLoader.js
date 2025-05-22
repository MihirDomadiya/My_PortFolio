'use client'

import React, { useEffect, useState } from 'react'

export default function PageLoader() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 3500) // 3.5 seconds

        return () => clearTimeout(timer)
    }, [])

    return loading ? (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
            <div className="logo text-6xl rotate text-white">M</div>
            <div className="mt-8 w-48 h-0.5 bg-gray-700 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-white animate-progress"></div>
            </div>
        </div>
    ) : null
}