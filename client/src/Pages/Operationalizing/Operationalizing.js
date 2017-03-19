import React, { Component } from 'react';
import Page from '../../Components/Page';
import Footer from '../../Components/Footer';
import OpeningBlock from '../../Components/OpeningBlock';

class Operationalizing extends Component {
  render() {
    return (
      <Page>
        <section className="content-block">
          <OpeningBlock
            page="03"
            title="Operationalizing a rural market strategy"
          />
          <p>
            Rural finance was a highly effort-intensive business and vastly different from urban models in terms of branch locations, channel development, delivery, service standards and product design. Mahindra Finance had to adapt to the earning cycles of rural customers who were typically engaged in agriculture and related activities. While the M&M dealers' staff advised on size, type, operation and maintenance of tractors, clients were referred to Mahindra Finance for loans. The close coordination with dealers helped to reduce the lead-time for transactions.
          </p>
          <p>
            Loan appraisals generally entailed client visits and interviews to understand their income sources and the farming cycles. Collecting this information required reviewing documents and checking credits records. The Mahindra Finance team decided to rely on neighborhood and village authorities to judge credit-worthiness. Thereafter, tailor-made loans with tenure, interest rates and repayment schedules suited to the client were issued. Customers paid 25% of the vehicle price upfront, while Mahindra Finance provided 75%. Based on the assessment of cash flow and deployment of assets, Mahindra Finance developed customized loans, which were not offered by the commercial banks.
          </p>

          <p>
            As rural customers were often first-time owners of an asset, the company realized that it could not force-fit a standard product on them. Mahindra Finance also employed local people, who were familiar with the situation on the ground, as field executives. Given the limitations of the rural infrastructure, the field staff personally visited customer's premises to offer loans and to collect cash repayments. Systems were put in place so that the company could approve a loan within two days via a decentralized process that met predetermined criteria. Such face-to-face interactions allowed it to be more responsive to local market demands. Furthermore, about 80% of the monthly receipts was in cash and the company had to establish a robust cash management system to transfer the money on a daily basis to banks cross the country.
          </p>

        </section>

        <Footer
          backwardLabel="02"
          backwardText="Entry"
          backwardLink="/entry"
          forwardLabel="04"
          forwardText="Growth trajectory from 1991 to 2002"
          forwardLink="/growth"
        />
      </Page>
    );
  }
}

export default Operationalizing;
