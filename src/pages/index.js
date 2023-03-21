import Head from 'next/head'
import Layout from "@/components/layout/layout";
import SamplePage from "@/components/samplePage/samplePage";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Immigration Score Calculator</title>
        <meta name="description" content="Calculate immigration score" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
        <SamplePage>
            Home Page
        </SamplePage>
    </Layout>
  )
}


