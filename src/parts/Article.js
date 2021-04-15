import React from "react";

import TandaTangan from "images/v502_1719.png";

export default function Article() {
  return (
    <div>
      <p className="text-gray-primary mb-6">
        Bali United Football Club is an Indonesian professional club based in
        Gianyar, Bali. Bali United began operations in 2014 and continyes to be
        of the highest tier in the Indonesian football competition, League 1.
        The club has a vision to grow the football industry in Indonesia through
        creating an ecosystem consisting of 4Cs namely the Club, Community.
        Corporation and Country.{" "}
        <b className="text-red-primary">Staying true to this vision</b>, the
        football club lauched a sports agency under the name United Creative, to
        always bring the <b className="text-red-primary">GAME ON</b> beyond its
        own club.
      </p>

      <p>Warn regards,</p>
      <img
        src={TandaTangan}
        alt="ttd"
        className="-ml-20 mb-2"
        style={{ width: 350 }}
      />

      <hr />
    </div>
  );
}
