import MyComponent from "../components/y/MyComponent"
import Head from 'next/head'

export default function Home() {
  return (
   <><div>
      <Head>
        <title>KredSmart.ai</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
    </div><MyComponent></MyComponent></>
  );
}
