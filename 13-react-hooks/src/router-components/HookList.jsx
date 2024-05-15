import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Hooks from './Hooks'
import {UseMemo, UseReducer, UseCallback, UseContext, UseEffect, UseRef} from "../components/hook-index"


function HookList() {


  return (
    <div className=' bg-slate-500 p-3 rounded-lg mb-3'>
        <h1 className='text-6xl mt-4 mb-7'><b>💻React Hooks💻</b></h1>
        <hr />
        <div className=' bg-gray-900 p-3 pb-5 rounded-md'>
          <Routes>
            <Route path='' element={<Hooks/>}/>
            <Route path='Effect' element={<UseEffect/>}/>
            <Route path='Ref' element={<UseRef/>}/>
            <Route path='Memo' element={<UseMemo/>}/>
            <Route path='Callback' element={<UseCallback/>}/>
            <Route path='Context' element={<UseContext/>}/>
            <Route path='Reducer' element={<UseReducer/>}/>
            <Route path='*' element={<h1>No Hook as such</h1>}/>
          </Routes>
        </div>
    </div>
  )
}

export default HookList