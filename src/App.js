import {Route,Routes} from 'react-router-dom'
import Login from "./component/Login";
import Home from "./component/Home";
import Sign from './component/Sign';
import Section from './component/CVEditor/Section';
import Create from './component/Create';

export default function App(){
  return (
    <>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        {/*<Route path="/Apply" element={<Home/>}/>*/}
        <Route path="/create" element={<Section/>}/> 
        <Route path="/login" element={<Login/>}/>
        <Route path="/Sign" element={<Sign/>}/>
      </Routes>
    </>
  )
}
