import { Dispatch, SetStateAction } from "react";
import { Severity } from "../components/tosterFactory";

type UIActions<T> = Dispatch<SetStateAction<T>>
export type toasterType = Severity | ''
export type UITriggerContextType = { 
    loading: boolean, 
    showLoading?: UIActions<boolean>, 
    showSuccessMessage: string, 
    setShowSuccessMessage?: UIActions<string>,
    toasterType:toasterType, 
    setToasterType?:UIActions<toasterType>

}
