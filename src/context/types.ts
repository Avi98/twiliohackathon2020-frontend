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

export type PorfileData = {
    "user": number,
    "image": null | string,
    "first_name": string ,
    "last_name":string,
    "description": string,
    "mobile": string,
    "current_location": string,
    "user_id": number
}