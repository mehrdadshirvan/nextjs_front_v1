import '@/styles/globals.css'
import type {AppProps} from 'next/app'
// @ts-ignore
import {ReactElement, ReactNode, useEffect} from "react";
import type {NextPage} from "next";
import {
    Hydrate,
    QueryCache,
    QueryClient,
    QueryClientProvider,
} from "react-query";


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

const queryClient = new QueryClient(
    {
        queryCache: new QueryCache({
            onError: (error, query) => {
                // 🎉 only show error toasts if we already have data in the cache
                // which indicates a failed background update
                if (error) {
                    console.log("work");

                }
            },
        }),
    }
);

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function App({Component, pageProps}: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                {getLayout(<Component {...pageProps} />)}
            </Hydrate>
        </QueryClientProvider>
    );
}
