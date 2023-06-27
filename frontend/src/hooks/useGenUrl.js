import { useState } from "react"

const apiUrl = process.env.REACT_APP_API_URL;
console.log(apiUrl+'url');
export const useGenUrl=()=>{
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(false);
    const genurl=async (url)=>{
        setIsLoading(true);
        setError(false);
        const response = await fetch(apiUrl+'url',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({url})
        })
        const json = await response.json();
        if(!response.ok) {
            setError(true);
            setIsLoading(false)
            return null;
        }
        if(response.ok) {
            setIsLoading(false)
            return json.shorturl;
        }
    }
    return {genurl,isLoading,error};
}