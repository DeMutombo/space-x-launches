import { gql } from "@apollo/client";

const ALL_lAUNCHES = gql`
  {
    launchLatest {
      id
      mission_name
      launch_date_utc
      upcoming
      details
      launch_site {
        site_id
        site_name
        site_name_long
      }
      launch_success
      ships {
        image
        name
        type
      }
      rocket {
        rocket_name
      }
      launch_year
    }
    launchNext {
      id
      mission_name
      upcoming
      launch_date_utc
      details
      launch_site {
        site_id
        site_name
        site_name_long
      }
      launch_success
      launch_year
      rocket {
        rocket_name
      }
      ships {
        id
        image
        name
        type
      }
    }
    launches(limit: 10) {
      mission_name
      launch_date_local
      ships {
        image
        name
      }
      id
      details
      launch_success
    }
  }
`;

export default ALL_lAUNCHES;
