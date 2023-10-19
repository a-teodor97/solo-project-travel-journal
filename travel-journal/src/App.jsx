import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import data from "./data";
import { indexOf } from "lodash-es";

export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        imageUrl={item.imageUrl}
        country={item.location}
        mapsUrl={item.googleMapsUrl}
        title={item.title}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <main>
        <section className="cards-list">{cards}</section>
      </main>
    </div>
  );
}
