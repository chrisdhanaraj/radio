import React, { Component } from 'react';
import Page from '../../Components/Page';
import OpeningBlock from '../../Components/OpeningBlock';
import Footer from '../../Components/Footer';

class Growth extends Component {
  render() {
    return (
      <Page>
        <section className="content-block">
          <OpeningBlock page="04" title="Growth trajectory from 1991 to 2002" />

          <ul className="year-list">
            <li>
              <span className="year-list__year">1991</span>
              <p>Incorporated as Maxi Motors Financial Services Limited</p>
            </li>
            <li>
              <span className="year-list__year">1992</span>
              <p>
                Name changed to Mahindra & Mahindra Financial Services Limited
              </p>
            </li>
            <li>
              <span className="year-list__year">1993</span>
              <p>Began financing M&M utility vehicles</p>
            </li>
            <li>
              <span className="year-list__year">1996</span>
              <p>Began financing M&M dealers for purchase of tractors</p>

            </li>
            <li>
              <span className="year-list__year">1999</span>
              <p>
                Started tractor retail financing in rural and semi-urban
                areas
              </p>
            </li>
            <li>
              <span className="year-list__year">2001</span>
              <p>Total assets under management exceed INR 10 billion</p>
            </li>
            <li>
              <span className="year-list__year">2002</span>
              <p>
                International Finance Corporation granted Mahindra Finance Tier II
                debt
              </p>
            </li>
          </ul>
        </section>

        <section className="section-block">
          <h1>Learning as an entrepreneurial business</h1>

          <p>
            From inception, Mahindra Finance had a profit orientation and the main KPI for Ramesh was ROE. Parent M&M did not dictate where or how Mahindra Finance would expand. Channels, product design and branch locations were all decided by the subsidiary. As a consequence of not being able to control the repayment schedule, the company stumbled in the initial years with an asset-liability mismatch. Mahindra Finance held a retail deposit license and mobilized deposits by borrowing from banks, insurance companies or institutional investors. However, the company did not know whether it would be more effective to borrow for one year or for five years.
          </p>

          {/** TODO: blockquote */}

          <p>
            As it scaled up, the company banked on the customer’s willingness to put up 25% of the money upfront; the resale price of the collateral, which was able to cover the principal at all times for a three-year loan; and the existence of a second-hand market such that the vehicle could be sold off within 30 days, if necessary. The company understood the difference between intentional default and circumstantial default. Mahindra Finance had gross non-performing assets of 5%, but after adjusting for seasonality impacts, net credit write-off was about 1%.
          </p>
          <p>
            Ramesh explained that this business could not be run through policies set at headquarters:
          </p>

          {/** TODO: blockquote */}
        </section>

        <Footer
          backwardLabel="03"
          backwardText="Operationalizing"
          backwardLink="/mahindra-finance/01-4-operationalizing-a-rural-market-strategy"
          forwardText="Review"
          forwardLink="/mahindra-finance/review1"
        />
      </Page>
    );
  }
}

export default Growth;
