import React from 'react';
import Page from '../../Components/Page';
import MainHeading from '../../Components/MainHeading';
import ContentSection from '../../Components/ContentSection';

const Introduction = () => {
  return (
    <Page>
      <MainHeading subtitle="case study" title="Mahindra Finance" />
      <ContentSection>
        <p>
          In 2002, the Mumbai-based INR 62 billion Mahindra group was among the largest industrial houses in India. Its flagship company – Mahindra & Mahindra Limited (M&M) – was a pioneer and leader in the tractor and utility vehicle market in the country.
        </p>

        <p>
          Mahindra & Mahindra Financial Services Limited (Mahindra Finance), a subsidiary of M&M, was established in 1991 as a captive finance arm of the parent company to provide loans for M&M vehicles.
        </p>

        <p>
          Over the next decade, Mahindra Finance was led by the managing director, Ramesh Iyer, who successfully grew the company to meet the financing needs of M&M dealers and their customers.
        </p>
      </ContentSection>
    </Page>
  );
};

export default Introduction;
