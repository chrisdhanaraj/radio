import React, { Component } from 'react';
import Page from '../../Components/Page';
import OpeningBlock from '../../Components/OpeningBlock';
import Footer from '../../Components/Footer';

class Entry extends Component {
  render() {
    return (
      <div>
        <Page>
          <section className="content-block">
            <OpeningBlock page="02" title="Entry into the Rural Market" />

            <p>
              Parent M&M’s vehicles – tractors, farm application equipment and passenger vehicles – brought Mahindra Finance to the rural market.
            </p>

          </section>
        </Page>
        <blockquote>
          <div className="blockquote-content">
            <p>
              We entered the rural market by force and not by design because that is where Mahindra tractors were sold. The risks involved in investing in a sector with no prior experience, statistics, or pool of knowledge were very daunting indeed.
            </p>
            <cite>
              <span>Ramesh Iyer</span>
              <span>Managing Director</span>
            </cite>
          </div>
        </blockquote>
        <Page>
          <section className="content-block">
            <h1>Rural India</h1>

            <p>
              Villages remain at the heart of India. In 2002 about 75% of India’s population, or 746 million people (i.e. 12.5% of the world population), comprising 135 million households, lived in approximately 638,000 villages. Rural India generated more than half of the national income. However, the per capita annual income in rural areas, at INR 9,481, was less than half that of urban areas, which stood at INR 19,407.
            </p>
            <p>
              Nearly 55% of rural income came from the agriculture sector and 70% of the rural population was employed in small-scale agricultural and related occupations. In the recent past there had been a gradual reduction in dependence on agriculture as other sectors started playing a more significant role in the rural economy. About 70% of the rural poor dit not have a bank account and 43% of rural households continued to rely on informal finance (moneylenders and relatives).
            </p>

          </section>

          <Footer
            backwardLabel="01"
            backwardText="History"
            backwardLink="/mahindra-finance/01-1-setting-the-scene"
            forwardLabel="03"
            forwardText="Operationalizing"
            forwardLink="/mahindra-finance/01-4-operationalizing-a-rural-market-strategy"
          />
        </Page>
      </div>
    );
  }
}

export default Entry;
