import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface SelectInputProps {
    values: Array<{ label: string, value: string }>,
    defaultValue?: string,
    onInputChange?: (value: string) => void,
    name?: string
}

export default function SelectInput({ values, defaultValue, onInputChange, name }: SelectInputProps) {


    return (
        <Select defaultValue={defaultValue} name={name} onValueChange={(value) => {
            if (onInputChange !== undefined) {
                onInputChange(value)
            }
        }}>
            <SelectTrigger className="w-[180px] border border-zinc-500">
                <SelectValue placeholder={defaultValue} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {
                        values.map(({label, value})=> (
                            <SelectItem value={value} key={value}>{label}</SelectItem>
                        ))
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
