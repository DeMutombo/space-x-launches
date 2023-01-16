export interface ILaunchDetails {
  latestLaunch: {
    id: number;
    details: string;
    launch_date_utc: string;
    launch_site: {
      site_id: string;
      site_name: string;
      site_name_long: string;
    };
    launch_success: boolean;
    launch_year: string;
    mission_name: string;
    rocket: {
      rocket_name: string;
    };
    ships: [
      {
        image: string;
        name: string;
        type: string;
      }
    ];
  };
  launchNext: {
    id: number;
    details: string;
    launch_date_utc: string;
    launch_site: {
      site_id: string;
      site_name: string;
      site_name_long: string;
    };
    launch_success: boolean;
    launch_year: string;
    mission_name: string;
    rocket: {
      rocket_name: string;
    };
    ships: [
      {
        image: string;
        name: string;
        type: string;
      }
    ];
  };
  loading:boolean;
}
