import React, { useState } from 'react'
import SeachBar from './components/seachBar'
import FilterTabs from './components/filterTabs'
import AddUserButton from './components/addUserButton'
import UsersTable from './components/usersTable'
import { usersData } from './services/usersData'

const Uusarios = () => {

  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('Todos')

  const filteredUsers = usersData.filter((u) => {
    const matchSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())

    const matchFilter =
      filter === 'Todos' || u.status === filter

    return matchSearch && matchFilter
  })

  return (
    <div className="mb-6 space-y-1">
      <h1 className="text-2xl font-bold text-gray-800">
        Gestión de Usuarios
      </h1>

      <p className="italic font-semibold text-gray-400 text-sm">
        Listado general de usuarios del sistema
      </p>

      {/* BUSCADOR + FILTROS + BOTÓN */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mt-5">
        <div className="flex-1">
          <SeachBar value={search} onChange={setSearch} />
        </div>

        <div className="flex items-center gap-3 ">
          <FilterTabs active={filter} onChange={setFilter} />
        </div>

        <div className="flex items-center gap-3 text-semibold text-sm" >
          <AddUserButton onClick={() => console.log('Nuevo usuario')} />
        </div>
      </div>

      {/* TABLA */}
      <div className="mt-4 text-xs">
        <UsersTable users={filteredUsers} />
      </div>
      
    </div>
  )
}

export default Uusarios
