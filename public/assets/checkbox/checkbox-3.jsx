import Checkbox1 from "./checkbox-1"

export default function CheckboxCard() {
    return (
        <div className="relative flex flex-col">
            <div className={`cardDefault`}>
            <div className={`text5 font-semibold`}>You can change notification settings from your profile.</div>
                <div className="pt-2">
                    <Checkbox1 label={"Receive Emails"} checked={true}/>
                </div>
            </div>
        </div>
    )
}