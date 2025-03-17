import React, { Suspense, useState } from "react";
import "./App.css";
import Website from "./pages/Website";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Properties from "./pages/Properties/Properties";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ReactQueryDevtools } from "react-query/devtools";
import Property from "./pages/Property/Property";
import { MantineProvider } from "@mantine/core";
import UserDetailContext from "./context/UserDetailContext";
function App() {
  const queryClient=new QueryClient();
  const [userDetails,setUserDetails]=useState({
    favourites:[],
    bookings:[],
    token:null,
  });
  return (
    <UserDetailContext.Provider value={{userDetails,setUserDetails}}>
    <MantineProvider>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/properties" >
          <Route index element={<Properties/>}/>
          <Route path=":propertyId" element={<Property/>}/>
        </Route>
        <Route path="/" element={<Website/>} /> 
      </Route>
    </Routes> 
    </Suspense>
    </BrowserRouter>
    <ToastContainer/>
    <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
    </MantineProvider>
    </UserDetailContext.Provider>
    
  );
}

export default App;
