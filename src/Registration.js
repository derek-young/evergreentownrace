const Registration = () => (
  <div>
    <h3>Registration</h3>
    <hr />
    <div>
      <p>
        Your entry fee includes an official number, free transportation to the
        start, an informal brunch, music and entertainment. All race finishers
        will receive a custom printed Evergreen Town Race technical shirt.
      </p>
    </div>
    <hr />
    <div>
      <h6>ENTRY FEES</h6>
      <div style={{ display: "flex", margin: "24px 0" }}>
        <div style={{ padding: "0 40px" }}>
          <p style={{ marginBottom: 16 }}>5K RUN/WALK:</p>
          <ul>
            <li>Jan. 1 - Jan. 31: $25</li>
            <li>Feb. 1 - June 30: $30</li>
            <li>July 1 - Aug. 1(noon): $35</li>
          </ul>
        </div>
        <div style={{ padding: "0 40px" }}>
          <p style={{ marginBottom: 16 }}>10K RUN:</p>
          <ul>
            <li>Jan. 1 - Jan. 31: $30</li>
            <li>Feb. 1 - June 30: $35</li>
            <li>July 1 - Aug. 1(noon): $40</li>
          </ul>
        </div>
      </div>
      <p>Please choose your event wisely as you cannot change on race day.</p>
    </div>
    <hr />
    <div>
      <h6>TO REGISTER</h6>
      <a
        className="button"
        href="https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventReg%2FEventReg_SelectType.aspx%3FfEID%3D73298"
        target="_blank"
        style={{ marginBottom: 16 }}
      >
        Register Online
      </a>
      <p>
        Online registration will open on January 1st, 2020 and will close at
        noon on Saturday August 1st. Online processing fees will apply to online
        entries. Bib numbers for online registrants can be picked up at&nbsp;
        <a href="#home-3">these times and locations</a>. They cannot be picked
        up at Boone Mountain Sports.
      </p>
      <p>
        WALK-IN REGISTRATION: Locations will open on Thursday July 9th. Entry
        fees may be paid by cash or check at walk-in registration locations.
        Credit cards will not be accepted for payment. You may register in
        person at the following locations:
      </p>
      <ul style={{ margin: "0 0 24px 24px" }}>
        <li>Runners Roost Lakewood - through Thursday July 30th at noon</li>
        <li>
          Boone Mountain Sports in Evergreen - through Saturday August 2nd at
          noon
        </li>
      </ul>
      <p>
        Participants who register at a walk-in location will receive their bib
        number when they register.
      </p>
      <p>
        IMPORTANT: Your timing chip will be attached to your bib number, so
        there is no need to pick up or return a timing chip! Just wear your
        number visibly on the FRONT, and you'll be all set. Please do not
        crumple or fold your race number or you will damage the chip and you
        will not receive a finish time. Also, be sure the number is visible on
        the front and not covered by clothing.
      </p>
      <p>
        RUNNERS WITH DISABILITIES: We welcome runners of all abilities.
        Accommodations will be provided if necessary for the 5K distance. During
        registration, please select what accommodations are needed (Wheelchair
        accessibility, Double BIB for running guide, or Other). Please contact
        the Race Director with any questions.
      </p>
    </div>
  </div>
);

const domContainer = document.getElementById("section_registration");

ReactDOM.render(<Registration />, domContainer);
