import React, { Component } from 'react';
import Page from '../../Components/Page';
import OpeningBlock from '../../Components/OpeningBlock';
import Footer from '../../Components/Footer';

class EntryNewBusiness extends Component {
  render() {
    return (
      <Page>
        <section className="content-block">
          <OpeningBlock page="04" title="Insurance Broking" />

          <p>
            Insurance penetration in rural India was abysmally low. M&M management believed that insurance solutions would add value for its rural customers. A new subsidiary, Mahindra Insurance Brokers Ltd (MIBL), was established in 2004 after acquiring a Direct Broker License in life and non-life businesses. MIBL started with equity capital of INR 5 million ($100,000) and 14 people. Instead of developing or underwriting insurance products, MIBL decided to become a strong broker. Jaideep Devare was appointed managing director.
          </p>

          {/** TODO: VIDEO */}

          <p>
            As the net surplus left in the hands of a rural customer was often not enough for two days, they were not motivated to invest in the future. In India insurance products were typically designed for investment and not as a security product. Since Mahindra customers were owner-drivers – often the sole breadwinner – in the case of accident or death the company repossessed the vehicle, which was the source of livelihood.
          </p>

          {/** TODO: VIDEO */}

          <p>
            MIBL worked with insurance companies as a representative of customers. It shared the data on the history of write-offs due to death as well as the customers’ ability to pay and suggested designing a customized solution – Mahindra Loan Suraksha. The plan was designed as a group term insurance whereby the customer’s life was insured to the value of the loan. The premium kept declining in line with the reduction in the loan value. MIBL was a profit-making and dividend-paying company from year one.
          </p>

          {/** TODO: blockquote */}

          <p>
            After five years in operation, in FY 2009 MIBL had over 280,000 policies in its life and non-life retail businesses and recorded annual revenue of INR 231 million (an increase of 28% on the previous year) with net profits of INR 65 million (an increase of 30%) and contributed 4-5% to Mahindra Finance’s net profit.
          </p>

        </section>
      </Page>
    );
  }
}

export default EntryNewBusiness;
