const AlpineRescue = () => (
  <div>
    <h3>
      <a href="http://www.alpinerescueteam.org/" target="_blank">
        Alpine Rescue Team
      </a>
    </h3>
    <hr />
    <div>
      <p>
        The mission of Alpine Rescue Team is to ensure all-weather, 24/7, search
        and rescue response, preparedness, community education, coordination and
        leadership to Colorado's residents and visitors. Alpine Rescue Team
        responds to emergencies such as avalanches, lost hikers,
        high-altitude/vertical rescues and/or other situations in Colorado's
        mountainous terrain. Alpine Rescue is an independent, 501 (c) 3
        volunteer organization, not a government agency. Available 24/7, Alpine
        Rescue Team's assistance is always given free of charge! In case of
        emergency simply dial 911 and help will be dispatched.
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/AZborDwP548"
          allowfullscreen
        />
      </div>
    </div>
  </div>
);

const domContainer = document.getElementById("section_alpine_rescue");

ReactDOM.render(<AlpineRescue />, domContainer);
