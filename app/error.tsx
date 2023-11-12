'use client'

import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className='flex flex-col justify-center align-middle  mt-56 gap-7 '>
            <h3 className="scroll-m-20  text-center flex-1 text-2xl font-semibold tracking-tight">
                Something Went Wrong
            </h3>
            <div className=' m-auto'>
                <Button
                    className=""
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }
                >
                    Try again
                </Button>
            </div>
        </div>
    )
}