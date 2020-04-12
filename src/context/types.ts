import { Dispatch, SetStateAction } from "react";

export type UITriggerContextType = { loading: boolean, showLoading?:Dispatch<SetStateAction<boolean>>}