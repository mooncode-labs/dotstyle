import Checkbox1 from "./checkbox-1"

export default function CheckboxMultiple() {
    return (
        <div className="relative flex flex-col">
            <div className="text4">Sidebar</div>
            <div className="text5 textMuted">Multiple checkboxes! Check the items you would like.</div>
            <div className="pt-4 flex flex-col gap-2">
                <Checkbox1 label="Mango"/>
                <Checkbox1 label="Bread"/>
                <Checkbox1 label="Disabled Checkbox" disabled={true}/>
            </div>
        </div>
    )
}