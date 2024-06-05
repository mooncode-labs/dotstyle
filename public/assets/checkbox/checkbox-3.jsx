'use client'
import CheckboxSingle from "./checkbox-1";
import {useState} from "react";

export default function CheckboxCard() {
    const [checked, setChecked] = useState(true)

    return (
        <div className="relative flex flex-col">
            <div className="cardDefault">
            <div className="text5 font-semibold">You can change notification settings from your profile.</div>
                <div className="pt-2">
                    <CheckboxSingle id={'card-1'} label={"Receive Emails"} checked={checked} onChange={()=>setChecked(!checked)}/>
                </div>
            </div>
        </div>
    )
}