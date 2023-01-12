import { gql } from "@apollo/client";

const GET_LATEST_LAUNCH = gql`
  {
    launchLatest {
      id
      details
      launch_date_local
      mission_name
      rocket {
        rocket_name
      }
      ships {
        image
        name
        year_built
      }
      launch_site {
        site_name_long
      }
    }
  }
`;

export default GET_LATEST_LAUNCH;
