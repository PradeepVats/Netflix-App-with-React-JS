import React from "react";
import "./styles.css";
import Card from "./Card";

export default function App() {
  return (
    <>
      <h1 className="heading_style"> List of Top Movies in Netfilx 2020 </h1>
      <Card
        imgsrc="https://www.fillmurray.com/640/360"
        title=" A netflix Original Series"
        sname="Dark"
        link="https://www.netflix.com"
      />
      <Card
        imgsrc="https://i.picsum.photos/id/994/200/200.jpg"
        title=" Amazon Original Series"
        sname="Robot"
        link="https://www.google.com"
      />
      <Card
        imgsrc="https://i.picsum.photos/id/994/200/200.jpg"
        title=" Amazon Original Series"
        sname="Speical OPS"
        link="https://www.google.com"
      />
      <Card
        imgsrc="https://i.picsum.photos/id/994/200/200.jpg"
        title=" Amazon Original Series"
        sname="Panchanyat"
        link="https://www.google.com"
      />
      <Card
        imgsrc="https://i.picsum.photos/id/994/200/200.jpg"
        title=" Amazon Original Series"
        sname="URI"
        link="https://www.google.com"
      />
      <Card
        imgsrc="https://i.picsum.photos/id/994/200/200.jpg"
        title=" Amazon Original Series"
        sname="Pardeep Vats"
        link="https://www.google.com"
      />
    </>
  );
}
