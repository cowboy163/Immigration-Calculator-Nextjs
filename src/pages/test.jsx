import Layout from "@/components/layout/layout";
import Head from "next/head";
import Dropdown from "@/components/samplePage/muiRadio";

const Custom404 = () => {
    return(
        <Layout>
            <Head>
                <title>Test Page</title>
                <meta name="description" content="Calculate immigration score" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            {/*<SamplePage>*/}
            {/*    Test Page                */}
            {/*</SamplePage>*/}
            <Dropdown/>

        </Layout>
    )
}
export default Custom404