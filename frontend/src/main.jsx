import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavMenu from './components/general/NavMenu.jsx';
import FoliarCC from './components/pages/FoliarCC.jsx';
import GroundCC from './components/pages/GroundCC.jsx';
import FoliarCCBS from './components/pages/FoliarCCBS.jsx';
import Login from './components/pages/Login.jsx';
import GroundCCTXT from './components/pages/GroundCCTXT.jsx';
import GroundCCOM from './components/pages/GroundCCOM.jsx';
import Register from './components/pages/Register.jsx';

 const routing = (
<BrowserRouter>
  <Routes>
  <Route exact path="/" element={<Login/>}/>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/registro" element={<Register/>}/>
    <Route exact path="/analisis/suelos/qc" element={<GroundCC/>}/>
    <Route exact path="/analisis/suelos/qctxt" element={<GroundCCTXT/>}/>
    <Route exact path="/analisis/suelos/qcmo" element={<GroundCCOM/>}/>
    <Route exact path="/analisis/foliar/qc" element={<FoliarCC/>}/>
    <Route exact path="/analisis/foliar/qcbs" element={<FoliarCCBS/>}/>
  </Routes>   
</BrowserRouter>
 );

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <NavMenu/>

    {routing}
 </React.StrictMode>,
)