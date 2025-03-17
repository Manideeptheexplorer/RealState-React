import axios from 'axios';
import dayjs from 'dayjs';
import {toast} from 'react-toastify';

export const api=axios.create({
    baseURL:"http://localhost:3000/api",
});

export const getAllProperties=async()=>{
    try {
        const response=await api.get("/residency/all", {timeout:10*1000});
        if(response.status===400||response.status===500){
            throw response.data;
        }
        return response.data;
    } catch (error) {
        toast.error("Something went wrong");
        throw error;
    }
};

export const getProperty = async (id) => {
    try {
      const response = await api.get(`/residency/${id}`, {
        timeout: 10 * 1000,
      });
  
      if (response.status === 400 || response.status === 500) {
        throw response.data;
      }
      return response.data;
    } catch (error) {
      toast.error("Something went wrong");
      throw error;
    }
  };

export const createUser=(email,token)=>{
  try {
    api.post(`/user/register`,{email},
      {headers:{
        Authorization:`Bearer ${token}`,
      }}
    )
  } catch (error) {
    toast.error("something went wrong pls try again..")
    throw error;
  }
}

export const bookVisit=async(date,propertyId,email,token)=>{
  try {
    await api.post(`./user/bookVisits/${propertyId}`,
      {
        email,
        id:propertyId,
        date:dayjs(date).format("DD/MM/YYYY")
      },
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
      }
    )
  } catch (error) {
    toast.error("something went wrong")
    throw error;
  }
}

export const removeBooking=async(id,email,token)=>{
  try {
    await api.post(`./user/cancelBooking/${id}`,
      {
        email,
        
      },
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
      }
    )
  } catch (error) {
    toast.error("something went wrong")
    throw error;
  }
}