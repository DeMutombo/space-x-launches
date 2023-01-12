import React, { FC } from "react";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import graphqlClient from "../../../graphql/graphql-client";
import GET_NEXT_LAUNCH from "../../../graphql/queries/next-launch";
import { INextLaung } from "../../../interfaces/next-launch";
import Image from "next/image";

import placeHolder from "../../../public/images/spacexx-x.png";

const Next: FC<INextLaung> = ({ launchNext }) => {
  return (
    <>
      <div className="h-[95vh] flex justify-center">
        <div className="flex gap-10 w-[1380px] m-auto bg-white shadow-2xl">
          <div className="relative">
            <Image
              src={
                launchNext.ships[0] ? launchNext.ships[0].image : placeHolder
              }
              width={1280}
              height={100}
              alt="Launching station"
            />
            <p className="absolute top-1 left-1 bg-cyan-100  font-bold text-xl text-center p-2">
              Next mission - {launchNext.id}
            </p>
          </div>
          <div className="p-5 relative">
            <h1 className="text-xl font-bold text-center pb-3">
              {launchNext.mission_name}
            </h1>
            <table>
              <tr>
                <td className="font-bold pt-3">Date</td>
                <td className="px-5">:</td>
                <td>
                  {new Date(launchNext.launch_date_utc).toLocaleDateString()}
                </td>
              </tr>
              <tr>
                <td className="font-bold">Rocket</td>
                <td className="px-5">:</td>
                <td>{launchNext.rocket.rocket_name}</td>
              </tr>
            </table>
            <p className="font-bold pt-6">Launch Site</p>
            {launchNext.launch_site.site_name_long}
            <div className="absolute bottom-4">
              <Link
                href={"/"}
                className="bg-green-300 px-4 py-2 text-gray-700 hover:bg-green-700 hover:text-white">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const { data } = await graphqlClient.query({
    query: GET_NEXT_LAUNCH,
  });

  return {
    paths: [{ params: { id: data.launchNext.id } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await graphqlClient.query({
    query: GET_NEXT_LAUNCH,
  });

  return {
    props: { launchNext: data.launchNext },
  };
};

export default Next;
