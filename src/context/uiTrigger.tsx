import React, { useContext, createContext, ReactChild, useState } from "react"
import { UITriggerContextType } from "./types";



const UITriggerContext = createContext<UITriggerContextType>({loading:false, showLoading: undefined});
UITriggerContext.displayName = 'UITriggerContext'

export const UITrigger = ({ children }: { children: ReactChild }) => {
    const [loading, showLoading] = useState(false);
    return <UITriggerContext.Provider value={{ loading, showLoading }}>{children}</UITriggerContext.Provider>
}

export const useUITrigger = () => {
    const {loading, showLoading} = useContext(UITriggerContext);
    const toggleLoading = (value: boolean) => showLoading && showLoading(value)
    return {loading, toggleLoading}
}