import React, { useContext, createContext, ReactChild, useState } from "react"
import { UITriggerContextType,toasterType } from "./types";
import { Severity } from "../components/tosterFactory";



const UITriggerContext = createContext<UITriggerContextType>({
    loading:false, 
    showLoading: undefined,
    showSuccessMessage: '',
    setShowSuccessMessage:undefined,
    toasterType:'info', 
    setToasterType:undefined

});
UITriggerContext.displayName = 'UITriggerContext'

export const UITrigger = ({ children }: { children: ReactChild }) => {
    const [loading, showLoading] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState('')
    const [toasterType, setToasterType]= useState<toasterType>('')

    return <UITriggerContext.Provider value={{ 
        loading, 
        showLoading, 
        showSuccessMessage, 
        setShowSuccessMessage,
        toasterType, 
        setToasterType
     }}>{children}</UITriggerContext.Provider>
}

export const useUITrigger = () => {
    const {loading, showLoading, showSuccessMessage, setShowSuccessMessage,  
        toasterType, 
        setToasterType} = useContext(UITriggerContext);
    const toggleLoading = (value: boolean) => showLoading && showLoading(value)
    return {loading, toggleLoading, showSuccessMessage, setShowSuccessMessage, toasterType, 
        setToasterType}
}