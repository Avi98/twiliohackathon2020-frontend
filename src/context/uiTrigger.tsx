import React, { useContext, createContext, ReactChild, useState } from "react"
import { UITriggerContextType, toasterType } from "./types";



const UITriggerContext = createContext<UITriggerContextType>({
    loading: false,
    showLoading: undefined,
    showSuccessMessage: '',
    setShowSuccessMessage: undefined,
    toasterType: 'info',
    setToasterType: undefined,
    setFullPageLoader:undefined,
    fullPageLoader: false

});
UITriggerContext.displayName = 'UITriggerContext'

export const UITrigger = ({ children }: { children: ReactChild }) => {
    const [loading, showLoading] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState('')
    const [toasterType, setToasterType] = useState<toasterType>('')
    const [fullPageLoader, setFullPageLoader] = useState<boolean>(false)

    return <UITriggerContext.Provider value={{
        loading,
        showLoading,
        showSuccessMessage,
        setShowSuccessMessage,
        toasterType,
        setToasterType,
        setFullPageLoader,
        fullPageLoader
    }}>
        <div>hellow</div>
        {children}</UITriggerContext.Provider>
}

export const useUITrigger = () => {
    const {
        loading,
        showLoading,
        showSuccessMessage,
        setShowSuccessMessage,
        toasterType,
        setToasterType,
        setFullPageLoader,
        fullPageLoader
    } = useContext(UITriggerContext);
    const toggleLoading = (value: boolean) => showLoading && showLoading(value)
    return {
        loading,
        toggleLoading,
        showSuccessMessage,
        setShowSuccessMessage,
        toasterType,
        setToasterType,
        setFullPageLoader,
        fullPageLoader
    }
}