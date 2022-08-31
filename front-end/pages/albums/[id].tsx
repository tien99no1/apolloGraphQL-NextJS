import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const QUERY = gql`
  query ALbums {
    album(id: ${id}) {
      name
      img
      genre
      date
    }
  }
`;
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const album = data.album;

  return (
    <div>
      <h2 style={{ marginBottom: "60px" }}>Detail</h2>
      <div>
        <div>
          <img src={`${album.img}`} alt={`${album.name}`} />
        </div>
        <div>
          <h3>{album.name}</h3>
          <i>Release: {album.date}</i>
          <p>Genre: {album.genre}</p>
        </div>
      </div>
    </div>
  );
}
