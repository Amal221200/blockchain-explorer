"use client"
import SelectInput from "@/components/SelectInput"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { FormEvent, useCallback } from "react"

const selectInputData = [
    { value: "tx hash", label: "TX Hash" },
    { value: "block", label: "Block" },
    // { value: "tx hash", label: "TX Hash" },
    // { value: "tx hash", label: "TX Hash" },
]

const MainInput = () => {

    const router = useRouter()
    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const type = formData.get('type');
        const value = formData.get('value');

        if (!value) {
            return
        }

        if (type === 'tx hash') {
            router.push(`/transactions/${value}`)
        } else {
            router.push(`/blocks/${value}`)
        }
    }, [router])

    return (
        <form onSubmit={handleSubmit} className="flex gap-x-2 rounded-md bg-white text-black">
            <SelectInput values={selectInputData} name="type" defaultValue="tx hash" />
            <Input name="value" placeholder="Search by address / transaction hash / block number" className="max-w-5xl" />
            <div>
                <Button type="submit" variant={'secondary'} size={'icon'}>
                    <SearchIcon />
                </Button>
            </div>
        </form>
    )
}

export default MainInput