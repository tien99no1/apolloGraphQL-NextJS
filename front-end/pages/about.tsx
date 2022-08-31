import Head from "next/head";
import React from "react";

export default function About() {
  return (
    <>
      <Head>
        <title>Studio albums | About</title>
        <meta name="keywords" content="about" />
      </Head>
      <div>
        <h2>Who is Taylor Swift?</h2>
        <div className="about">
          <div>
            <p>
              Taylor Alison Swift (born December 13, 1989) is an American
              singer-songwriter.
            </p>
            <p>
              Her discography straddles genres, and her narrative
              songwriting—often inspired by her personal life—has received
              critical praise and widespread media coverage
            </p>
            <p>
              Taylor Swift has released 9 original studio albums, 2 re-recorded
              studio albums, 5 extended plays (EP), 3 live albums, and 14
              compilations. One of the best-selling music artists, she has sold
              an estimated 114 million album units worldwide.
            </p>
            <p>AND her brand new album "Midnights" will be out October 21</p>
          </div>
          <div className="img">
            <img
              src="https://lastfm.freetls.fastly.net/i/u/770x0/526ec444a5d8398434be3249fa3e9d50.jpg#526ec444a5d8398434be3249fa3e9d50"
              alt="taylor-image"
            />
          </div>
          <style jsx>
            {`
              .img {
                width: 60%;
              }
              .img img {
                width: 100%;
              }
            `}
          </style>
        </div>
      </div>
    </>
  );
}
