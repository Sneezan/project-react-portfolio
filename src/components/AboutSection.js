import React from 'react';
import { Section, Wrapper } from 'components/Section';
import { About, AboutWrapper, Line, Dot, Website } from 'components/About.js'
import { InactiveNotice } from './HeaderContent';

const AboutSection = () => {
  return (
    <Section primary>
      <Wrapper>
        <AboutWrapper>
          <About>I´m Cecilia - a social, out-going
            Software Engineer with love for code and design. I have extensive experience from
            working towards clients from a previous career in dentistry and I love meeting
            new people. I thrive in challenging environments where I strive to deliver
            out-of-the-box solutions. With an eagerness to learn, I´m constantly looking for
            oppurtunities to deepen my existing knowledge as well as broaden my skill set.

            Currently I work as a Software Engineer at
          <Website>
            <a
              href="https://www.relexsolutions.com/"
              rel="noreferrer"
              target="_blank"> RELEX Pricing & Promotions
            </a>
          </Website>, where I work in an team,
            delivering real functional features and diving into the world of TypeScript and React.
          <InactiveNotice indent={<> <Line /><Dot /></>} />
          </About>
        </AboutWrapper>
      </Wrapper>
    </Section>
  );
};

export default AboutSection;
