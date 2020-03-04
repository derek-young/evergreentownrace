const GeneralInfo = () => (
  <div>
    <h3>General Information</h3>
    <hr />
    <div>
      <h6>COURSE</h6>
      <p>
        Both the 5K and 10K courses wind gradually down Upper Bear Creek, with a
        finish near Evergreen Lake. This course treats participants to one of
        the most scenic and fastest races in Colorado. In fact, this may be one
        of the best races you have ever run! The fastest 5K ever run in Colorado
        was run on this course - 14:07 by Jason Hubbard in 1998.
      </p>
      <p>
        This is a point to point route. The 5k starts at the halfway point on
        the 10k course. Both distances have the same finish line.
      </p>
      <p>COURSE MAP</p>
      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}
      >
        <img
          alt="Race elevation profile"
          src="/wp-content/uploads/2020/03/race_course.png"
          style={{ maxWidth: "85%" }}
        />
      </div>
      <p>ELEVATION PROFILE</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          alt="Race elevation profile"
          src="/wp-content/uploads/2020/03/elevation_profile.jpg"
          style={{ maxWidth: "90%" }}
        />
      </div>
    </div>
    <hr />
    <div>
      <h6>RACE SCHEDULE</h6>
      <ul>
        <li>6:30 a.m. - Registration Opens</li>
        <li>6:30 a.m. - Buses Start</li>
        <li>8:00 a.m. - 5K Event Begins</li>
        <li>8:45 a.m. - 10K Event Begins</li>
      </ul>
    </div>
    <hr />
    <div>
      Most questions are answered right here on the race website.{" "}
      <strong>
        If you entered by mail, your entry was mailed directly to our timing
        company and may not be cashed until after the race.
      </strong>
      &nbsp;If you have a question that isn't answered here, please email
      the&nbsp;
      <a href="mailto:evergreentownrace@gmail.com?subject=QUESTION:%20Evergreen%20Town%20race">
        RACE DIRECTOR
      </a>
    </div>
  </div>
);

const domContainer = document.getElementById("section_general_info");

ReactDOM.render(<GeneralInfo />, domContainer);
