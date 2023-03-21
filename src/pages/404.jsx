import Layout from "@/components/layout/layout";
import Head from "next/head";
import SamplePage from "@/components/samplePage/samplePage";

const Custom404 = () => {
    return(
        <Layout>
            <Head>
                <title>Page Not Found</title>
                <meta name="description" content="Calculate immigration score" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <SamplePage>
                Page Not Found
            </SamplePage>
        </Layout>
    )
}
export default Custom404