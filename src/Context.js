import React, {useState, useContext} from "react";
import sublinks from "./data";

const AppContext=React.createContext();
export const AppProvider=({children})=>{
    const [isSidebaropen, setIssidebaropen]= useState(false);
    const [isSubmenuopen, setIssubmenuopen]= useState(false);
    const [location,setLocation]= useState({});
    const [page,setPage]=useState({page:'', links:[]})
    const openSidebar=()=>{
        setIssidebaropen(true);
    }
    const closeSidebar=()=>{
        setIssidebaropen(false);
    }
    const openSubmenu=(text,coordinates)=>{
        const page=sublinks.find((link)=>link.page===text);
        setPage(page);
        setLocation(coordinates)
        setIssubmenuopen(true);
    }
    const closeSubmenu=()=>{
        setIssubmenuopen(false);
    }
    return <AppContext.Provider value={{isSidebaropen, isSubmenuopen,openSidebar,closeSidebar,openSubmenu, closeSubmenu,location,page}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}

