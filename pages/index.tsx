import Head from "next/head";
import { GetStaticProps } from "next";
import graphqlClient from "../graphql/graphql-client";
import ALL_lAUNCHES from "../graphql/queries/launches";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { ILaunchDetails } from "../interfaces/launch-detaisl";

const inter = Inter({ subsets: ["latin"] });

const Home: React.FC<ILaunchDetails> = ({ latestLaunch, launchNext }) => {
  const imageholder = "https://i.imgur.com/Q4JzVA6.jpeg";
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Space missions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-[96.8vh]">
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
                <p className=" font-semibold text-blue-900 text-3xl pb-5">
                  {new Date(latestLaunch.launch_date_utc).toDateString()}
                </p>
                <Link
                  href={`missions/latest/${latestLaunch.id}`}
                  className="text-sm text-gray-500 hover:text-cyan-600">
                  Read more ...
                </Link>
              </div>
            </div>
          </div>
          {/* Next mission card*/}
          <div className="p-2 ">
            <h1 className="font-bold mb-3 text-white">NEXT MISSION</h1>
            <div className="flex gap-5 bg-white shadow-md rounded-md overflow-hidden">
              <Image
                src={imageholder}
                alt="ship name"
                width={280}
                height={160}
              />
              <div className="text-cyan-900 text-lg pb-10 px-10">
                <p className=" font-semibold text-blue-800 text-lg py-5">
                  Mission Number - {launchNext.id}
                </p>
                <p className=" font-semibold text-blue-900 text-3xl pb-5">
                  {new Date(launchNext.launch_date_utc).toDateString()}
                </p>
                <Link
                  href={`missions/next/${launchNext.id}`}
                  className="text-sm text-gray-500 hover:text-cyan-600">
                  Read more ...
                </Link>
              </div>
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
