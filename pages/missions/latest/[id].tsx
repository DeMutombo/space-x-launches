import React, { FC } from "react";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import graphqlClient from "../../../graphql/graphql-client";
import GET_LATEST_LAUNCH from "../../../graphql/queries/latest-launch";
import { ILatestLaunch } from "../../../interfaces/latest-launch";
import Image from "next/image";

const Next: FC<ILatestLaunch> = ({ latestLaunch }) => {
  const imageholder = "https://i.imgur.com/Q4JzVA6.jpeg";
  return (
    <>
      <div className="h-screen">
        <div className="flex justify-center p-5   ">
          <Link href={"/"} className="hover:text-cyan-600 text-white text-lg">
            Home
          </Link>
        </div>
        <div className="flex gap-10 w-[980px] m-auto bg-white shadow-2xl">
          <div className="relative">
            <Image
              src={
                latestLaunch.ships[0]
                  ? latestLaunch.ships[0].image
                  : imageholder
              }
              width={680}
              height={100}
              alt=""
            />
            <p className="absolute top-1 left-1 bg-cyan-100  font-bold text-xl text-center p-2">
              Latest mission - {latestLaunch.id}
            </p>
          </div>
          <div className="p-5">
            <h1 className="text-xl font-bold text-center pb-3">
              {latestLaunch.mission_name}
            </h1>
            <table>
              <tr>
                <td className="font-bold pt-3">Date</td>
                <td className="px-5">:</td>
                <td>
                  {new Date(
                    latestLaunch.launch_date_local
                  ).toLocaleDateString()}
                </td>
              </tr>
              <tr>
                <td className="font-bold">Rocket</td>
                <td className="px-5">:</td>
                <td>{latestLaunch.rocket.rocket_name}</td>
              </tr>
            </table>
            <p className="font-bold pt-6">Launch Site</p>
            {latestLaunch.launch_site.site_name_long}
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await graphqlClient.query({
    query: GET_LATEST_LAUNCH,
  });
  return {
    props: { latestLaunch: data.launchLatest },
  };
};

export default Next;
