import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />

      <link rel="icon" href="/favicon.ico" />
     <meta name="viewport" content="width=device-width, initial-scale=1" />
     <link rel="apple-touch-icon" href="\logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "ANR Travels",
  keywords: "ANRTravels,  SBI Bank Anand nagar colony ,Care hospital back side ,Hyderabad, Telangana.",
  description: "No.1 Cab Services in Hyderabad, effortable and 24/7 service. Book your Ride now.",
};

export default Meta;
