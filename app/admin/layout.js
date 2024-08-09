import '../globals.css'

export default function RootLayout({children}) {
    return (
        <html lang='en'>
        <head>
            <script
                src="https://cdn.jsdelivr.net/npm/admin-lte@4.0.0-beta1/dist/js/adminlte.min.js"
                integrity="sha256-5SPy1/00NR75iVOk7p0Ci0nwAAM8Ab7j31wyie+DKYw="
                crossOrigin="anonymous"
            ></script>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/admin-lte@4.0.0-beta1/dist/css/adminlte.min.css"
                integrity="sha256-c66Dhf3TzKZoXxk8aNaf2lu580xGnKke4mjUtbpMqYg="
                crossOrigin="anonymous"
            />
        </head>
        <body>
        {children}
        </body>
        </html>
    )
}
