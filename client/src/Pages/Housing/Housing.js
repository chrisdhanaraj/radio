import React, { Component } from 'react';
import Page from '../../Components/Page';
import OpeningBlock from '../../Components/OpeningBlock';
import Footer from '../../Components/Footer';

class Housing extends Component {
  render() {
    return (
      <div>
        <Page>
          <section className="content-block">
            <OpeningBlock page="05" title="Housing Finance" />

            <p>
              A new subsidiary – Mahindra Rural Housing Finance Ltd – was established in 2007 to provide a wide base of “under banked” customers with access to timely, cost-effective and flexible home loans. Given that India’s mortgage profile as a percentage of gross domestic product (GDP) was 9%, one of the lowest worldwide, the company saw considerable room for growth.
            </p>
          </section>
        </Page>
        <blockquote>
          <div className="blockquote-content">
            <p>
              Strategically it made sense for us to enter the rural home finance market because we had three distinct advantages which were also entry barriers for the others: (1) reach, (2) trust in the Mahindra brand, and (3) local knowledge.
            </p>
            <cite>
              <span>Anuj Mehra Managing Director</span>
              <span>Mahindra Rural Housing Finance Limited</span>
            </cite>
          </div>
        </blockquote>
        <Page>
          <section className="content-block">
            {/** TODO: graph and quote */}

            <p>
              Mahindra Housing Finance entered the market with the assumption that it would target the existing one million customers of the parent company. Each customer would potentially buy/build an 800-square-foot home. The loan disbursed was calculated to be INR 500,000 to INR 700,000 per house. Customers had to put up 40% of the amount upfront while Mahindra Finance would provide the remaining 60%.
            </p>
          </section>

          <section className="content-block">
            <h1>
              Mahindra Housing Finance: Unable to replicate former success
            </h1>
            <p>
              The first shock came when Mahindra Finance came forward to provide credit but there were no takers.
            </p>

            {/** TODO: QUOTES */}

            <p>
              With the realization that most rural customers built their homes incrementally, in a piecemeal manner, the most striking insight was that customers did not need home loans, instead they needed home completion loans. Therefore the actual loan requirement ranged from INR 50,000 to INR 90,000 – predominantly for repairs or extensions to an existing home. Mahindra Home Finance faced a tough start, with high operating costs and net losses in the first two years. The top management was perplexed and tried to identify what was going wrong.
            </p>

            {/** TODO: QUOTES */}

          </section>
        </Page>
        <blockquote>
          <div className="blockquote-content">
            <p>
              It appears that there is no win-win initially. Are we willing to lose first to learn? We have huge experience in successfully running a vehicle financing company for the same customer segment in the same geographies. Why should we fail in providing housing finance? After all, it is only the collateral that has changed. A customer's cash flows remain the same as they were for buying a tractor or a jeep. Is there a design weakness in the product? Are there cost inefficiencies? How should we modify our strategy?
            </p>
            <cite>
              <span>Ramesh Iyer</span>
              <span>Managing Director</span>
            </cite>
          </div>
        </blockquote>
        <Page>
          <Footer
            backwardLabel="01"
            backwardText="Insurance Broking"
            backwardLink="/mahindra-finance/02-1-entry-into-new-business-segments"
          />
        </Page>
      </div>
    );
  }
}

export default Housing;
