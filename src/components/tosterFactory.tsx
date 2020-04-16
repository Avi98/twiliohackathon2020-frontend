
import React from 'react';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { useUITrigger } from '../context/uiTrigger';
 
export type Severity = 'success' | 'info' | 'warning' | 'error';
interface IToasterFactory{
    severity: Severity,
    message: string,
    open: boolean
    handleClose?:(event: React.SyntheticEvent) => void;
}

export function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export function ToasterFactory() {
    const data  = useUITrigger()

    const cleanToasterMessage = () => data.setShowSuccessMessage && data.setShowSuccessMessage('')
    const Toaster = () => {
        switch (data.toasterType) {
            case 'success': return <Alert severity="success">{data.showSuccessMessage}</Alert>
            case 'info': return <Alert severity="info">{data.showSuccessMessage}</Alert>
            case 'warning': return <Alert severity="warning">{data.showSuccessMessage}</Alert>
            case 'error': return <Alert severity="error">{data.showSuccessMessage}</Alert>
            
        }
    }
    return (
        <Snackbar open={data.showSuccessMessage ===''? false : true} autoHideDuration={1000} onClose={cleanToasterMessage}>
            {Toaster()}
        </Snackbar>
    )

}