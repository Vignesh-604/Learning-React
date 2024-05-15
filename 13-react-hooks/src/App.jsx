import './App.css'
import { Route, Routes, useRoutes } from 'react-router-dom'
import {Library, BookList, Book, HookList, Home, AddBook} from "./router-components/router-index"
import Header from './router-components/Header';

function App() {
  console.log("RENDERING");
  
  let routes = useRoutes([
    {path: "/", element: <Home/>},
    {path: "hooks", element: <HookList/>},
    {path: "library", element: <Library/>, children:[{index:true, element:<BookList/>}]},
  ])

  // index is similar to path="" (default path)
  // even if there is dynamic routing (:id), hardcoded path are checked first (add)
  // path="hooks/*" means all nested rotes will have parent route as hooks
  // path="*" means any route other than specified (mostly bogus routes)
  return (
    <div>
      {/* <Routes location="/library">
        <Route path='add' element={<h1>Hello</h1>}/>
      </Routes> */}

      <Header />
      
      {/* {routes} */}

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='hooks/*' element={<HookList />}/>

        <Route path="library" element={<Library/>}>
          <Route index element={<BookList/>}/>  
          <Route path='add' element={<AddBook/>}/>
          <Route path=':id' element={<Book/>}/>
        </Route>

        <Route path='*' element={
          <hi className="text-11xl">WRONG URL</hi>
        }/>
      </Routes>
    </div>
    
  )
}

export default App
