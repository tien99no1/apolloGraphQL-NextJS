// pages/server-side.js

import { gql } from "@apollo/client";
import client from "../apollo-client";

export async function getServerSideProps() {
    const { data } = await client.query({
      query: gql`
        query ALbums {
          albums {
            name
            img
            genre
            date
          }
        }
      `,
    });
  
    return {
      props: {
        albums: data.albums,
      },
    };
  }
  