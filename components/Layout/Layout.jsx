import Head from 'next/head'


export default function Layout(props) {

  return (
    <>
      <Head>
        <title>HealthOs Commerce</title>
        <meta name="description" content="HealthOs Commerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
            {props.children}
      </main>
    </>
  )
}