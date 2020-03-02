const PacketPickup = () => (
  <div>
    <h3>Packet Pickup & Directions</h3>
    <hr />
    <div>
      <p>
        RACE DAY PACKET PICK-UP: Online, Mail-In, and Race Day entrants may pick
        up their bib numbers at the bus pickup locations on race morning. 10K
        entrants will pick up their numbers at Xcel Energy in Evergreen. 5K
        entrants will pick up their bib numbers at Evergreen School.
      </p>
      <p>
        EARLY PACKET PICKUP: 2020 Packet Pickup locations will be announced
        shortly
      </p>
      <p>Shirts & Goody Bags will be distributed at the finish line.</p>
      <p>
        PLAN AHEAD: Your entry must be received by us no later than midnight
        July 26th to be eligible for early packet pickup. All entries received
        after that time must be picked up on race morning.
      </p>
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
    </div>
    <hr />
    <div>
      <p>
        TRANSPORTATION TO THE START LINE (Don't miss the bus!): Free bus
        transportation will be provided. The buses for the 5K will leave from
        Evergreen High School. The buses for the 10K will leave from the Xcel
        Energy frontage road. You must display your race number to get on a bus.
        No one without an official number will be allowed on the buses. Upper
        Bear Creek Road will be closed to all traffic and there will be no
        parking available at the start locations. The buses will transport
        runners from 6:30 a.m. to 7:30 a.m. for the 5K events and until 8:00
        a.m. for the 10K events. If you miss the bus, you miss the race!
      </p>
    </div>
    <hr />
    <div>
      <p>
        PLEASE NOTE: 5K and 10K races have separate parking, registration, and
        bus pick-up locations. Please be sure to go to the correct location on
        race morning. Click "View Larger Map" under each map to see a detailed
        map and get directions from your house. Click "Directions" on the larger
        map to get directions from your house!
      </p>
      <div style={{ display: "flex" }}>
        <div style={{ paddingRight: 20, paddingLeft: 40, textAlign: "center" }}>
          <p>5K DIRECTIONS:</p>
          <p>
            5K participants will pick up their bib numbers and board shuttle
            buses at Evergreen High School.
          </p>
        </div>
        <div style={{ paddingRight: 40, paddingLeft: 20, textAlign: "center" }}>
          <p>10K DIRECTIONS:</p>
          <p>
            Participants will pick up their bib numbers and board shuttle buses
            at Xcel Energy in Evergreen.
          </p>
        </div>
      </div>
    </div>
    <hr />
    <div>
      <p>
        ROAD CLOSURES: Upper Bear Creek Road will be closed to all traffic and
        there will be no parking available at the start locations. The buses
        will transport runners from 6:30 a.m. to 7:30 a.m. for the 5K events and
        until 8:00 a.m. for the 10K events. If you miss the bus, you miss the
        race!
      </p>
    </div>
  </div>
);

const domContainer = document.getElementById("section_packet_pickup");

ReactDOM.render(<PacketPickup />, domContainer);
