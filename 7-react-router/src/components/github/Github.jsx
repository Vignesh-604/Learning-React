import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  // Fetch data that gets executed after the comopent has been called
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch("https://api.github.com/users/Vignesh-604")
    //     .then((response) => response.json())
    //     .then((response) => setData(response))
    //     .catch((e) => console.log("Error" + e))
    // }, [])

    const data = useLoaderData()    // fetches data from loader
    console.log(data);
  return (
    <div>
        <h1>Github</h1>
        <div className='flex justify-center m-10'>
          <div className='flex justify-center flex-wrap h-full w-auto max-w-2xl bg-slate-300 rounded-lg p-7'>
            <img src={data.avatar_url}  className='max-h-60 mr-6 rounded-3xl'/>
            <div>
            <b><h1 className=' text-5xl text mb-5'>{data.name}</h1></b>
            <hr className=' border-black'/>
            <ul className=' text-2xl text-start'>
              <li><b>Username:</b> {data.login}</li>
              <li><b>Followers:</b> {data.followers}</li>
              <li><b>Following</b>: {data.following}</li>
              <li><b>Repositories:</b> {data.public_repos}</li>
              <li className='mt-3 text-blue-400 hover:text-blue-700'><b>
                <a href={data.html_url}>Github account link</a>
              </b></li>
            </ul>
            </div>
          </div>
        </div>
    </div>
  )
}
export default Github

// a loader function that gets executed along with rendering of component
export const githubInfo = async function() {
    const response = await fetch("https://api.github.com/users/Vignesh-604")
    return response.json()
} // data gets returned to loader