'use client'

import { useState } from 'react'

const Status = [
  {
    Available: {
      name: 'Avaliable for new projects',
      color: 'lime',
    },
    NotAvailable: {
      name: 'Not Available for new projects',
      color: 'red',
    },
  },
]

export function StatusWork({ isAvailable = true }) {
  const [status, setStatus] = useState(
    isAvailable ? Status[0].Available : Status[0].NotAvailable
  )
  const bgColorClass =
    status === Status[0].Available ? 'bg-lime-400' : 'bg-red-600'
  return (
    <p>
      <span className="inline-flex items-center px-2 py-0 text-xm text-gray-400 font-semibold rounded-md pointer-events-auto body-primary box-gen">
        <span className="mr-1.5 flex h-4 w-4 items-center">
          <span
            className={`absolute inline-flex w-3 h-3 rounded-full opacity-75 animate-ping ${bgColorClass}`}
          ></span>
          <span
            className={`relative inline-flex w-3 h-3 rounded-full ${bgColorClass}`}
          ></span>
        </span>
        {status.name}
      </span>
    </p>
  )
}
