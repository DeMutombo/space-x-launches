import { getByTestId, render, screen } from "@testing-library/react";
import Home, { getStaticProps } from "@/pages/index";
import "@testing-library/jest-dom";
import graphqlClient from "../../graphql/graphql-client";
import { ILaunchDetails } from "../../interfaces/launch-detaisl";
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';

export const TEST_LAUNCHE_QUERY: ILaunchDetails = {
  latestLaunch: {
    details: "",
    id: 109,
    launch_date_utc: "2020-10-24T15:31:00.000Z",
    mission_name: "Starlink-15 (v1.0)",
    launch_site: {
      site_id: "ccafs_slc_40",
      site_name: "CCAFS SLC 40",
      site_name_long:
        "Cape Canaveral Air Force Station Space Launch Complex 40",
    },
    launch_success: true,
    launch_year: "2020",
    rocket: { rocket_name: "Falcon 9" },
    ships: [
      {
        image: "https://i.imgur.com/MtEgYbY.jpg",
        name: "GO Ms Tree",
        type: "High Speed Craft",
      },
    ],
  },
  launchNext: {
    details:
      "SpaceX's 21st ISS resupply mission on behalf of NASA and the first under the CRS-2 contract, this mission brings essential supplies to the International Space Station using the cargo variant of SpaceX's Dragon 2 spacecraft. The external payload for this mission is the Nanoracks Bishop Airlock. Falcon 9 and Dragon launch from LC-39A, Kennedy Space Center and the booster is expected to land on an ASDS. The mission will be complete with return and recovery of the Dragon capsule and down cargo.",
    id: 110,
    launch_date_utc: "2020-12-06T16:17:00.000Z",
    mission_name: "CRS-21",
    launch_site: {
      site_id: "ksc_lc_39a",
      site_name: "KSC LC 39A",
      site_name_long: "Kennedy Space Center Historic Launch Complex 39A",
    },
    launch_success: true,
    launch_year: "2020",
    rocket: { rocket_name: "Falcon 9" },
    ships: [
      {
        image: "https://i.imgur.com/MtEgYbY.jpg",
        name: "GO Ms Tree",
        type: "High Speed Craft",
      },
    ],
  },
  loading: false,
};

describe("Test all components of the home page", () => {
  it("getStatic props returns the past launch and next launch", async () => {
    // TEST_LAUNCHE_QUERY
    const TEST_LAUNCHE_QUERY: ILaunchDetails = [
      {
        latestLaunch: {
          id: "109",
          mission_name: "Starlink-15 (v1.0)",
        },
        launchLaNext: {
          details: "SpaceX's 21st ISS resupply mission on behalf",
          id: "110",
        },
        loading: false,
      },
    ];
    jest.spyOn(graphqlClient, "query").mockImplementation(async () => ({
      data:TEST_LAUNCHE_QUERY,
    }));

    const response = await getStaticProps({} as any);

    expect(graphqlClient.query).toHaveBeenCalled();

    expect(response).toEqual({
      props: {
        latestLaunch: TEST_LAUNCHE_QUERY.latestLaunch,
        launchNext: TEST_LAUNCHE_QUERY.launchNext,
        loading: TEST_LAUNCHE_QUERY.loading,
      },
    });
  });

  it("Home page should renders Last mission heading", () => {
    render(
      <Home
        latestLaunch={TEST_LAUNCHE_QUERY.latestLaunch}
        launchNext={TEST_LAUNCHE_QUERY.launchNext}
        loading={TEST_LAUNCHE_QUERY.loading}
      />
    );

    const HeadingElement = screen.getByRole("heading", {
      name: "LAST MISSION",
    });
    expect(HeadingElement).toBeInTheDocument();
  });
  it("Show Last mession date on card", () => {
    const TEST_LAUNCHE_QUERY: ILaunchDetails = {
      latestLaunch: {
        details: "",
        id: 109,
        launch_date_utc: "2020-10-24T15:31:00.000Z",
        mission_name: "Starlink-15 (v1.0)",
        launch_site: {
          site_id: "ccafs_slc_40",
          site_name: "CCAFS SLC 40",
          site_name_long:
            "Cape Canaveral Air Force Station Space Launch Complex 40",
        },
        launch_success: true,
        launch_year: "2020",
        rocket: { rocket_name: "Falcon 9" },
        ships: [
          {
            image: "https://i.imgur.com/MtEgYbY.jpg",
            name: "GO Ms Tree",
            type: "High Speed Craft",
          },
        ],
      },
      launchNext: {
        details:
          "SpaceX's 21st ISS resupply mission on behalf of NASA and the first under the CRS-2 contract, this mission brings essential supplies to the International Space Station using the cargo variant of SpaceX's Dragon 2 spacecraft. The external payload for this mission is the Nanoracks Bishop Airlock. Falcon 9 and Dragon launch from LC-39A, Kennedy Space Center and the booster is expected to land on an ASDS. The mission will be complete with return and recovery of the Dragon capsule and down cargo.",
        id: 110,
        launch_date_utc: "2020-12-06T16:17:00.000Z",
        mission_name: "CRS-21",
        launch_site: {
          site_id: "ksc_lc_39a",
          site_name: "KSC LC 39A",
          site_name_long: "Kennedy Space Center Historic Launch Complex 39A",
        },
        launch_success: true,
        launch_year: "2020",
        rocket: { rocket_name: "Falcon 9" },
        ships: [
          {
            image: "https://i.imgur.com/MtEgYbY.jpg",
            name: "GO Ms Tree",
            type: "High Speed Craft",
          },
        ],
      },
      loading: false,
    };
    render(
      <Home
        latestLaunch={TEST_LAUNCHE_QUERY.latestLaunch}
        launchNext={TEST_LAUNCHE_QUERY.launchNext}
        loading={TEST_LAUNCHE_QUERY.loading}
      />
    );

    const missionDate = screen.getByTestId("last-date");
    expect(missionDate).toBeInTheDocument();
  });
  it("Show correct date for last mission", () => {
    const { getByTestId } = render(
      <Home
        latestLaunch={TEST_LAUNCHE_QUERY.latestLaunch}
        launchNext={TEST_LAUNCHE_QUERY.launchNext}
        loading={TEST_LAUNCHE_QUERY.loading}
      />
    );

    const missionCorrectDate = getByTestId("last-date");
    expect(missionCorrectDate.textContent).toContain(
      new Date(TEST_LAUNCHE_QUERY.latestLaunch.launch_date_utc).toDateString()
    );
  });
  it("Home page renders the Heading of Next mission", () => {
    const TEST_LAUNCHE_QUERY: ILaunchDetails = {
      latestLaunch: {
        details: "",
        id: 109,
        launch_date_utc: "2020-10-24T15:31:00.000Z",
        mission_name: "Starlink-15 (v1.0)",
        launch_site: {
          site_id: "ccafs_slc_40",
          site_name: "CCAFS SLC 40",
          site_name_long:
            "Cape Canaveral Air Force Station Space Launch Complex 40",
        },
        launch_success: true,
        launch_year: "2020",
        rocket: { rocket_name: "Falcon 9" },
        ships: [
          {
            image: "https://i.imgur.com/MtEgYbY.jpg",
            name: "GO Ms Tree",
            type: "High Speed Craft",
          },
        ],
      },
      launchNext: {
        details:
          "SpaceX's 21st ISS resupply mission on behalf of NASA and the first under the CRS-2 contract, this mission brings essential supplies to the International Space Station using the cargo variant of SpaceX's Dragon 2 spacecraft. The external payload for this mission is the Nanoracks Bishop Airlock. Falcon 9 and Dragon launch from LC-39A, Kennedy Space Center and the booster is expected to land on an ASDS. The mission will be complete with return and recovery of the Dragon capsule and down cargo.",
        id: 110,
        launch_date_utc: "2020-12-06T16:17:00.000Z",
        mission_name: "CRS-21",
        launch_site: {
          site_id: "ksc_lc_39a",
          site_name: "KSC LC 39A",
          site_name_long: "Kennedy Space Center Historic Launch Complex 39A",
        },
        launch_success: true,
        launch_year: "2020",
        rocket: { rocket_name: "Falcon 9" },
        ships: [
          {
            image: "https://i.imgur.com/MtEgYbY.jpg",
            name: "GO Ms Tree",
            type: "High Speed Craft",
          },
        ],
      },
      loading: false,
    };
    render(
      <Home
        latestLaunch={TEST_LAUNCHE_QUERY.latestLaunch}
        launchNext={TEST_LAUNCHE_QUERY.launchNext}
        loading={TEST_LAUNCHE_QUERY.loading}
      />
    );

    const HeadingElement = screen.getByRole("heading", {
      name: "NEXT MISSION",
    });
    expect(HeadingElement).toBeInTheDocument();
  });
  it("Next mession must show date on card", () => {
    const TEST_LAUNCHE_QUERY: ILaunchDetails = {
      latestLaunch: {
        details: "",
        id: 109,
        launch_date_utc: "2020-10-24T15:31:00.000Z",
        mission_name: "Starlink-15 (v1.0)",
        launch_site: {
          site_id: "ccafs_slc_40",
          site_name: "CCAFS SLC 40",
          site_name_long:
            "Cape Canaveral Air Force Station Space Launch Complex 40",
        },
        launch_success: true,
        launch_year: "2020",
        rocket: { rocket_name: "Falcon 9" },
        ships: [
          {
            image: "https://i.imgur.com/MtEgYbY.jpg",
            name: "GO Ms Tree",
            type: "High Speed Craft",
          },
        ],
      },
      launchNext: {
        details:
          "SpaceX's 21st ISS resupply mission on behalf of NASA and the first under the CRS-2 contract, this mission brings essential supplies to the International Space Station using the cargo variant of SpaceX's Dragon 2 spacecraft. The external payload for this mission is the Nanoracks Bishop Airlock. Falcon 9 and Dragon launch from LC-39A, Kennedy Space Center and the booster is expected to land on an ASDS. The mission will be complete with return and recovery of the Dragon capsule and down cargo.",
        id: 110,
        launch_date_utc: "2020-12-06T16:17:00.000Z",
        mission_name: "CRS-21",
        launch_site: {
          site_id: "ksc_lc_39a",
          site_name: "KSC LC 39A",
          site_name_long: "Kennedy Space Center Historic Launch Complex 39A",
        },
        launch_success: true,
        launch_year: "2020",
        rocket: { rocket_name: "Falcon 9" },
        ships: [
          {
            image: "https://i.imgur.com/MtEgYbY.jpg",
            name: "GO Ms Tree",
            type: "High Speed Craft",
          },
        ],
      },
      loading: false,
    };
    render(
      <Home
        latestLaunch={TEST_LAUNCHE_QUERY.latestLaunch}
        launchNext={TEST_LAUNCHE_QUERY.launchNext}
        loading={TEST_LAUNCHE_QUERY.loading}
      />
    );

    const missionDate = screen.getByTestId("next-date");
    expect(missionDate).toBeInTheDocument();
  });
  it("Show correct date for Next mission", () => {
    const { getByTestId } = render(
      <Home
        latestLaunch={TEST_LAUNCHE_QUERY.latestLaunch}
        launchNext={TEST_LAUNCHE_QUERY.launchNext}
        loading={TEST_LAUNCHE_QUERY.loading}
      />
    );

    const missionCorrectDate = getByTestId("next-date");
    expect(missionCorrectDate.textContent).toContain(
      new Date(TEST_LAUNCHE_QUERY.launchNext.launch_date_utc).toDateString()
    );
  });
  it("Find link to past mission on page", () => {
    render(
      <Home
        latestLaunch={TEST_LAUNCHE_QUERY.latestLaunch}
        launchNext={TEST_LAUNCHE_QUERY.launchNext}
        loading={TEST_LAUNCHE_QUERY.loading}
      />
    );

    const missionLink = screen.getByRole("link", {
      name: "Open Next Mission ...",
    });
    expect(missionLink).toBeInTheDocument();
  });
  it("Find link to past mission on page", () => {
    render(
      <Home
        latestLaunch={TEST_LAUNCHE_QUERY.latestLaunch}
        launchNext={TEST_LAUNCHE_QUERY.launchNext}
        loading={TEST_LAUNCHE_QUERY.loading}
      />
    );

    const missionLink = screen.getByRole("link", {
      name: "Open Next Mission ...",
    });
    expect(missionLink).toBeInTheDocument();
  });
});
