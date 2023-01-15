import Head from "next/head";
import { GetStaticProps } from "next";
import graphqlClient from "../graphql/graphql-client";
import ALL_lAUNCHES from "../graphql/queries/launches";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { ILaunchDetails } from "../interfaces/launch-detaisl";
import placeHoder from "../public/images/space-x-station.jpeg";

const inter = Inter({ subsets: ["latin"] });

const Home: React.FC<ILaunchDetails> = ({ latestLaunch, launchNext }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Space missions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-[95vh] bg-[url('../public/images/spaceX.jpg')] bg-cover">
        <div className="flex justify-center pt-40">
          {/* Previous mission card */}
          <div className="p-2 ">
            <h1 className="font-bold mb-3 text-white ">LAST MISSION</h1>
            <div className="flex gap-5 bg-white shadow-md rounded-md overflow-hidden">
              <Image
                src={latestLaunch.ships[0].image}
                alt="ship name"
                width={320}
                height={160}
              />
              <div className="text-cyan-900 text-lg pb-10 px-10">
                <h1 className=" font-semibold text-blue-800 text-xl py-5">
                  Mission Number - {latestLaunch.id}
                </h1>
                <p
                  data-testid="last-date"
                  className=" font-semibold text-blue-900 text-3xl pb-5 mb-5">
                  {new Date(latestLaunch.launch_date_utc).toDateString()}
                </p>
                <Link
                  href={`missions/latest/${latestLaunch.id}`}
                  className="text-sm text-gray-500 hover:text-gray-800 bg-blue-100 hover:bg-gray-50 px-2 py-1 shadow-lg rounded-md">
                  Open Past Mission ...
                </Link>
              </div>
            </div>
          </div>
          {/* Next mission card*/}
          <div className="p-2 ">
            <h1 className="font-bold mb-3 text-white text-right">
              NEXT MISSION
            </h1>
            <div className="flex gap-5 bg-white shadow-md rounded-md overflow-hidden">
              <div className="text-cyan-900 text-lg pb-10 px-10">
                <p className=" font-semibold text-blue-800 text-xl py-5">
                  Mission Number - {launchNext.id}
                </p>
                <p
                  data-testid="next-date"
                  className=" font-semibold text-blue-900 text-3xl pb-5 mb-5">
                  {new Date(launchNext.launch_date_utc).toDateString()}
                </p>
                <Link
                  href={`missions/next/${launchNext.id}`}
                  className="text-sm text-gray-500 hover:text-gray-800 bg-blue-100 hover:bg-gray-50 px-2 py-1 shadow-lg rounded-md">
                  Open Next Mission ...
                </Link>
              </div>
              <Image
                src={placeHoder}
                alt="ship name"
                width={280}
                height={160}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await graphqlClient.query({
    query: ALL_lAUNCHES,
  });
  return {
    props: { latestLaunch: data.launchLatest, launchNext: data.launchNext },
  };
};
