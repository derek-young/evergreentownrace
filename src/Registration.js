const Registration = () => (
  <div>
    <div>
      <p>
        Your entry fee includes an official number, free transportation to the
        start, an informal brunch, music and entertainment. All race finishers
        will receive a custom printed Evergreen Town Race technical shirt.
      </p>
    </div>
    <hr />
    <div>
      <p>ENTRY FEES</p>
      <p>5K Run/Walk</p>
      <ul>
        <li>Jan. 1 - Jan. 31: $25</li>
        <li>Feb. 1 - June 30: $30</li>
        <li>July 1 - Aug. 1(noon): $35</li>
      </ul>
      <p>10K Run</p>
      <ul>
        <li>Jan. 1 - Jan. 31: $30</li>
        <li>Feb. 1 - June 30: $35</li>
        <li>July 1 - Aug. 1(noon): $40</li>
      </ul>
      <p>Please choose your event wisely as you cannot change on race day.</p>
    </div>
    <hr />
    <div>
      <p>TWO WAYS TO REGISTER:</p>
      <p>
        <a
          href="https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventReg%2FEventReg_SelectType.aspx%3FfEID%3D73298"
          target="_blank"
        >
          Register Online
        </a>
        : Online registration will open on January 1st, 2020 and will close at
        noon on Saturday August 1st. Online processing fees will apply to online
        entries.
      </p>
      <p>
        <strong>
          Bib numbers for online registrants can be picked up at&nbsp;
          <a href="home-3#">these times and locations</a>. They cannot be picked
          up at Boone Mountain Sports.
        </strong>
      </p>
      <p>
        Walk-In Registration: Locations will open on Thursday July 9th. Entry
        fees may be paid by cash or check at walk-in registration locations.
        Credit cards will not be accepted for payment. You may register in
        person at the following locations:
      </p>
      <ul>
        <li>Runners Roost Lakewood - through Thursday July 30th at noon</li>
        <li>
          Boone Mountain sport in Evergreen - through Saturday August 2nd at
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
        Runners with Disabilities: We welcome runners of all abilities.
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
