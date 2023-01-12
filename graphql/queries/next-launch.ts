import { gql } from "@apollo/client";

const GET_NEXT_LAUNCH = gql`
  {
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
  }
`;

export default GET_NEXT_LAUNCH;
