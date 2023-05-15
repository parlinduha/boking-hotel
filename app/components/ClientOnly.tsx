"use client"
import React, { useEffect, useState } from "react";

interface ClientOnlyProps {
    children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({children}) => {
    const [hasMounted, SetHasMounted] = useState(false);
    
    useEffect(()=>{
        SetHasMounted(true);
    }, [])

    if(!hasMounted){
        return null;
    }
    return ( 
        <>
        {children}
        </>
     );
}
 
export default ClientOnly;