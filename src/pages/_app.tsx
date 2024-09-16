/**
 *  importing required libraries 
 * */
import type { AppProps } from 'next/app'

/**
 * Importing required css
 */
import "@/css/global.css"


/**
 * MyApp is wrapper for all pages 
 */
export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component  {...pageProps} />
        </>
    )
}