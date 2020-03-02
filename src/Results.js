const Results = () => (
  <div>
    <h3>Results</h3>
    <hr />
    <div>
      <p>
        An informal brunch at the Evergreen Lake House will follow the race.
        Family and friends may participate in the brunch for $3 each, payable on
        race day at the Alpine Rescue Teams pop up tent located near the finish
        line. Terrific prizes will be given away during brunch.
      </p>
    </div>
    <hr />
    <div>
      <p>
        RESULTS: Race results will be posted here live during the race.
        Participants must cross the the timing mats at the finish line with
        their bib number visible on the front and not covered by clothing.
        Results will only be edited (for mispelled names, etc.) for two weeks
        following the event. All results are based on gun time.
      </p>
    </div>
    <hr />
    <div>
      <p>
        AWARDS: Awards will be based on gun-time for your event, and will be
        presented on the lawn in front of the lakehouse. *You must be present to
        pick up your award. Awards will not be mailed.
      </p>
    </div>
  </div>
);

const domContainer = document.getElementById("section_results");

ReactDOM.render(<Results />, domContainer);
