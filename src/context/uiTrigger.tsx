import React, { useContext, createContext, ReactChild, useState } from "react"
import { UITriggerContextType, toasterType } from "./types";
import Styled from "styled-components/macro"
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const Overlay = Styled.div`
    position: absolute;
    background-color: rgba(0,0,0,0.5);
    height: 100%;
    width: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    /* justify-items: center; */
    justify-content: center;
`
const useStyles = makeStyles({
    circle: {
        color: '#68bf73'
    },
});

const UITriggerContext = createContext<UITriggerContextType>({
    loading: false,
    showLoading: undefined,
    showSuccessMessage: '',
    setShowSuccessMessage: undefined,
    toasterType: 'info',
    setToasterType: undefined,
    setFullPageLoader: undefined,
    fullPageLoader: false

});
UITriggerContext.displayName = 'UITriggerContext'

export const UITrigger = ({ children }: { children: ReactChild }) => {
    const [loading, showLoading] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState('')
    const [toasterType, setToasterType] = useState<toasterType>('')
    const [fullPageLoader, setFullPageLoader] = useState<boolean>(false)

    const classes = useStyles();
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
        {loading && <Overlay> <CircularProgress size={80} classes={{
            circle: classes.circle,
        }} /></Overlay>}
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