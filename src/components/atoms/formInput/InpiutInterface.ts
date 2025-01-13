import { RegisterOptions } from "react-hook-form";

export interface inputForm {
    name:string,
    label:string,
    validation?:RegisterOptions,
    type:string,
    placeholder:string,
}