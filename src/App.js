import Hedear from "./component/Hedear";
import Home from "./component/Home";
import {Route,Routes} from 'react-router-dom'
import Moreinfo from "./component/Moreinfo";
import Template from "./component/Template";
import EditCv from "./component/EditCv";
import cvtepmlate from "./component/data/cvtemplate";
export default function App() {
  return (
    <>
     <Hedear/> 
     
     <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/make" element={<Home/>}/>
      <Route path="/Apply" element={<Home/>}/>
      <Route path="/create" element={<Home/>}/>
      <Route path="/login" element={<Home/>}/>
        </Routes>
        <Moreinfo/>
        <Template cvtepmlate={cvtepmlate}/>
        <EditCv/>

    </>
  )
}
