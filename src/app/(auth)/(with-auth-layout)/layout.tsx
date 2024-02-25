
export default function AuthLayout({children,}: { children: React.ReactNode }) {
    return (
        <>
            <h1>Auth</h1>
            <div>{children}</div>
        </>
    )
}
