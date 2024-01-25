import React, { useEffect, useState } from 'react'

function uselocalStroge(stragename) {
    const [data, setdata] = useState(localStorage.getItem(stragename)?JSON.parse(localStorage.getItem(stragename)):[])
    useEffect(() => {
     localStorage.setItem(stragename,JSON.stringify(data))
    }, [data])
    
  return [data,setdata]
}

export default uselocalStroge