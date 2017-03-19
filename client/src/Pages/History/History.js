import React, { Component } from 'react';
import Page from '../../Components/Page';
import Footer from '../../Components/Footer';
import OpeningBlock from '../../Components/OpeningBlock';

class History extends Component {
  render() {
    return (
      <Page>
        <section className="content-block">
          <OpeningBlock page="01" title="Setting the Scene" />

          <p>
            In 2002, the Mumbai-based INR 62 billion Mahindra group was among the
            largest industrial houses in India. Its flagship company – Mahindra &
            Mahindra Limited (M&M) – was a pioneer and leader in the tractor and
            utility vehicle market in the country.
          </p>

          <p>
            Mahindra & Mahindra Financial Services Limited (Mahindra Finance), a
            subsidiary of M&M, was established in 1991 as a captive finance arm of
            {' '}
            the parent company to provide loans for M&M vehicles.
          </p>

          <p>
            Over the next decade, Mahindra Finance was led by the managing director,
            {' '}
            Ramesh Iyer, who successfully grew the company to meet the financing needs
            {' '}
            of M&M dealers and their customers.
          </p>

          <p>
            In 2002 Ramesh was at a decision-making juncture: “What will be the next
            {' '}
            engine of growth for the company?”
          </p>
        </section>

        <section className="content-block">
          <h1>History of M&M</h1>

          <p>
            M&M was founded in 1945 as a steel-trading company by two brothers – Jagdish Chandra Mahindra and Kailash Chandra Mahindra. In 1947 it entered auto manufacturing to bring the iconic Willy’s Jeep (under license) to Indian roads. The founders believed that introducing new modes of transportation held the key to India’s prosperity, so one of their first goals was to build durable, rugged vehicles that could handle the rough Indian terrain. During the 1950s and 1960s, the group consolidated its position by adding businesses like steelmaking, light commercial vehicles and tractor manufacturing to its portfolio. Over the next five decades, the M&M group became the domestic market leader in farm and utility vehicles and also emerged as one of the leading tractor brands in the world, competing with the likes of John Deere.
          </p>
          <p>
            An organizational restructuring exercise in 1994 resulted in two core manufacturing activities (1) utility and light commercial vehicles and (2) agricultural tractors. All other activities were spun off into separate entities and organized under business groups in the areas of Hospitality, Trade and Financial Services, Automotive Components, Information Technology, Telecom and Infrastructure Development. M&M was structured as a federation of empowered companies that enjoyed entrepreneurial independence while leveraging group-wide synergies.
          </p>

          <div className="flex-section">
            <div className="flex-col-6">
              <strong>Automative Division</strong>
              <ul className="dashed">
                <li>Utility vehicles</li>
                <li>Light commercial vehicles</li>
                <li>Three wheelers</li>
                <li>Farm Equipment Division</li>
                <li>Agricultural tractors</li>
                <li>Implements used in conjunction with tractors</li>
                <li>Industrial engines</li>
              </ul>
            </div>
            <div className="flex-col-6">
              <strong>Product Portfolio</strong>
              <ul className="dashed">
                <li>Tractors - 46%</li>
                <li>Hard-top UVs - 24%</li>
                <li>Soft-top UVs - 13%</li>
                <li>Pick-ups - 10%</li>
                <li>LCV - 5%</li>
                <li>3 Wheelers - 2%</li>
              </ul>
            </div>
          </div>
        </section>

        <Footer
          forwardLabel="02"
          forwardText="Entry into the rural market"
          forwardLink="/entry-rural-market"
        />
      </Page>
    );
  }
}

export default History;
