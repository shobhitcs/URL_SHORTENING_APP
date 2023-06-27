import { useState } from "react"

export const useGenUrl=()=>{
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(false);
    const genurl=async (url)=>{
        setIsLoading(true);
        setError(false);
        const response = await fetch('https://urlshortify-api.onrender.com/url',{
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