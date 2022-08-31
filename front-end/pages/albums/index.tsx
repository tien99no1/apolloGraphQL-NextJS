import Head from "next/head";
import React from "react";
import { useQuery, gql } from "@apollo/client";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const QUERY = gql`
  query ALbums {
    albums {
      id
      name
      img
      genre
      date
    }
  }
`;

interface Album {
  id: number;
  name: String;
  img: String;
  genre: String;
  date: String;
}

export default function AllAlbums() {
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const albums = data.albums;

  return (
    <>
      <Head>
        <title>Studio albums | Albums</title>
        <meta name="keywords" content="albums" />
      </Head>
      <div>
        <h2 className={styles.text}>All Albums</h2>
        {albums.map((album: Album) => (
          <div className={styles.album} key={album.id}>
            <div>
              <Link href={`/albums/` + album.id} key={album.id}>
                <img
                  className={styles.albumCover}
                  src={`${album.img}`}
                  alt={`${album.name}`}
                />
              </Link>
              <div>
                <span>{album.name}</span> <br />
                <p>{album.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
