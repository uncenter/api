import Head from "next/head";

export default function Page() {
    return (
        <div>
            <Head>
                <meta name="og:title" content="OG Image API" />
                <meta
                    name="og:description"
                    content="Open Graph image generator for uncenter.org"
                />
                <meta
                    name="og:image"
                    content={
                        // Because OG images must have a absolute URL, we use the
                        // `VERCEL_URL` environment variable to get the deployment’s URL.
                        // More info:
                        // https://vercel.com/docs/concepts/projects/environment-variables
                        `${
                            process.env.VERCEL_URL
                                ? "https://" + process.env.VERCEL_URL
                                : ""
                        }/api/vercel`
                    }
                />
            </Head>
            <h1>OG Image API</h1>
            <p>
                https://og.uncenter.org/api/og?title=YOUR TITLE HERE&date=YOUR
                DATE&time=YOUR READING TIME
            </p>
            <p>
                Example:{" "}
                <a href="https://og.uncenter.org/api/og?title=Hello World&date=January 1, 2023&time=5 min read">
                    https://og.uncenter.org/api/og?title=Hello
                    World&date=January 1, 2023&time=5 min read
                </a>
            </p>
            <p>
                Return to <a href="https://uncenter.org">uncenter.org</a>.
            </p>
        </div>
    );
}
