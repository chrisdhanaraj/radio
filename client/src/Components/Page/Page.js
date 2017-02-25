import React from 'react';

const Page = props => {
  return (
    <section className="page">
      {props.children}
    </section>
  );
};

export default Page;
