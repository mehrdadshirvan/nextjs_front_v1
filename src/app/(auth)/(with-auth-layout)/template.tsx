
export default function AuthLayout({children,}: { children: React.ReactNode }) {
    return (
        <div>
            <h1>Auth</h1>
            <section>{children}</section>
        </div>
    )
}
