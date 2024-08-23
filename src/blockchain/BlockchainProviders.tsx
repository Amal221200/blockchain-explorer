"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { PropsWithChildren } from "react"
import { State, WagmiProvider } from "wagmi"
import { getConfig } from "./config"


interface BlockchainProvidersProps extends PropsWithChildren {
    initialState: State | undefined
}

const queryClient = new QueryClient()
const config = getConfig()

const BlockchainProviders = ({ children, initialState }: BlockchainProvidersProps) => {
    return (
        <WagmiProvider config={config} initialState={initialState}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </WagmiProvider>
    )
}

export default BlockchainProviders