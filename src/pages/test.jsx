import Layout from "@/components/layout/layout";
import Head from "next/head";
import SamplePage from "@/components/samplePage/samplePage";
import ColorToggleButton from "@/components/samplePage/colorToggleButton";
import MuiRadio from "@/components/samplePage/muiRadio";
import RadioButtonGrid from "@/components/samplePage/muiRadio";

const Custom404 = () => {
    return(
        <Layout>
            <Head>
                <title>Page Not Found</title>
                <meta name="description" content="Calculate immigration score" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            {/*<SamplePage>*/}
            {/*    Test Page                */}
            {/*</SamplePage>*/}
            <ColorToggleButton/>
            <RadioButtonGrid/>

        </Layout>
    )
}
export default Custom404