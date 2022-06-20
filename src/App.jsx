import './App.css';
import React from 'react';
import 'macro-css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './PAGES/HOMEPAGE/HomePage';
import AboutUs from './PAGES/ABOUT US/AboutUs';
import Customs from './PAGES/CUSTOMS/Customs';
import Brands from './PAGES/BRANDS/Brands'
import ErrorPage from './PAGES/ERROR PAGE/ErrorPage';

import Buy from './PAGES/BUY/Buy';
import Catalog from './PAGES/CATALOG/Catalog';
import Morecaps from './PAGES/MORECAPS/Morecaps';
import Signup from './AUTH/Signup';
import Protected from './AUTH/Protected';
import { AuthContextProvider } from './AUTH/CONTEXT/AuthContext';
import Nike from './PAGES/FilteredCaps/Nike';
import Newera from './PAGES/FilteredCaps/Newera';
import Blackclover from './PAGES/FilteredCaps/Blackclover';
import Dc from './PAGES/FilteredCaps/Dc';
import Flexfit from './PAGES/FilteredCaps/Flexfit';
import Kiddocap from './PAGES/FilteredCaps/Kiddocap';
import Science from './PAGES/FilteredCaps/Sciense';
import Reebok from './PAGES/FilteredCaps/Reebok';

function App() {



  return (
   <>
      <AuthContextProvider>
      <Routes>
         <Route path='/Homepage' element={<Protected> <HomePage /> </Protected>} />
         <Route path='/customs' element={ <Protected> <Customs /> </Protected> } />
         <Route path='/brands' element={ <Protected> <Brands /> </Protected> } />
         <Route path='/aboutus' element={ <Protected> <AboutUs /> </Protected>  } />
         <Route path='*' element={ <Protected>  <ErrorPage /> </Protected>} />
         <Route path='/Buy' element={ <Protected>  <Buy /> </Protected>} />
         <Route path='/Catalog' element={ <Protected> <Catalog /> </Protected>} />
         <Route path='/Morecaps' element={ <Protected>  <Morecaps /> </Protected>} />



         <Route path='/Nike' element={ <Protected> <Nike /> </Protected>} />
         <Route path='/Newera' element={ <Protected> <Newera /> </Protected>} />
         <Route path='/Blackclover' element={ <Protected> <Blackclover /> </Protected>} />
         <Route path='/Dc' element={ <Protected> <Dc /> </Protected>} />
         <Route path='/Flexfit' element={ <Protected> <Flexfit /> </Protected>} />
         <Route path='/Kiddocap' element={ <Protected> <Kiddocap /> </Protected>} />
         <Route path='/Science' element={ <Protected> <Science /> </Protected>} />
         <Route path='/Reebok' element={ <Protected> <Reebok /> </Protected>} />

         <Route path='' element={<Signup />} />
      </Routes>
      </AuthContextProvider>
   </>
  );
}

export default App;
