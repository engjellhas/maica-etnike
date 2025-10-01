'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeftIcon } from '@heroicons/react/24/solid' // adjust if using a different icon source

export default function BackButton() {
    const router = useRouter()

    return (
        <button
            className="!bg-none text-white border border-white rounded-md px-2 !py-1 mt-4 flex gap-2"
            onClick={() => router.back()}
        >
            <ArrowLeftIcon aria-hidden="true" className="size-5" />
            Kthehu
        </button>
    )
}
