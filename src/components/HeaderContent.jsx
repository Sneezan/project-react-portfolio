import React from 'react';
import { Website } from 'components/About.js'

export const InactiveNotice = ({ indent }) => {
  return (
    <div>
      <p>
        {indent} I´m not actively updating my portfolio since 2023, but I am constantly working on
        new projects as well as growing my skillset in software development.
        If you want to know more about me or what
        I currently working on, please reach out on
        <Website>
          <a
            href="https://www.linkedin.com/in/ceciliafranlund/"
            rel="noreferrer"
            target="_blank"> LinkedIn
          </a>
        </Website>
      </p>
    </div>
  );
};

export default InactiveNotice;