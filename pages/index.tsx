import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Celuprotección — Catálogo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Tienda de protectores para celulares" />
      </Head>

      <main
        style={{
          maxWidth: "960px",
          margin: "40px auto",
          padding: "0 16px",
          fontFamily:
            "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
        }}
      >
        <h1 style={{ fontSize: "32px", marginBottom: "12px" }}>
          Celuprotección — Catálogo
        </h1>
        <p style={{ fontSize: "16px", lineHeight: 1.6 }}>
          ¡Tu proyecto Next.js está funcionando! Esta es la página de inicio.
        </p>

        <div
          style={{
            marginTop: "24px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
          }}
        >
          <article style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}>
            <h2 style={{ fontSize: 18, marginBottom: 8 }}>Funda básica</h2>
            <p>Protección simple para tu celu.</p>
          </article>

          <article style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}>
            <h2 style={{ fontSize: 18, marginBottom: 8 }}>Vidrio templado</h2>
            <p>Anti-rayas y anti-golpes.</p>
          </article>
        </div>
      </main>
    </>
  );
}
