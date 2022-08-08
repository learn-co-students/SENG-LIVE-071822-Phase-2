import React from "react";

export default function ProjectListItem({ project }) {
  console.log(project);
  const { image, name, about, link, phase } = project;

  //   id: 1,
  //   name: "Great Outdoors Guide",
  //   about: "Plan your next adventure to in the U.S. National Parks!",
  //   phase: 4,
  //   link: "https://great-outdoors-guide.netlify.app",
  //   image: "https://i.imgur.com/8GnP2Uw.png",
  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button className="claps">👏0</button>
      </figure>
      <section className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        <p><a href={link}>Link</a></p>
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
      </footer>
    </li>
  )
}