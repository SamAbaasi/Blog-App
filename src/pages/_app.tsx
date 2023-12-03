import React, { useState } from "react";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import {config} from '@/lib/react-query-config';
import Layout from "@/layout/layout";
import "./globals.css"

export default function MyApp({Component, pageProps}: AppProps) {
    const [queryClient] = useState(() => new QueryClient(config))
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <Layout>
                    <Component  {...pageProps} />
                </Layout>
            </Hydrate>
        </QueryClientProvider>
    )
}