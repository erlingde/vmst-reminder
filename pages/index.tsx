/* eslint-disable jsx-a11y/anchor-is-valid */
import Card from 'components/organisms/Card'

import Container from 'components/atoms/Container'
import Heading from 'components/atoms/Heading'
import Paragraph from 'components/atoms/Paragraph'
import TextLink from 'components/atoms/TextLink'
import Section from 'components/atoms/Section'
import Animate from 'components/atoms/Animate'
import { slideInFromRight, slideInFromLeft } from 'components/atoms/Keyframes'

import SubscribeForm from 'components/molecules/SubscribeForm'
import SubscribeSuccess from 'components/molecules/SubscribeSuccess'

const Home = (): JSX.Element => (
  <>
    <Container>
      <Section>
        <Animate animation={slideInFromLeft}>
          <Heading primary="Sign up." secondary="Enjoy" />
          <Paragraph>
            Sign up for a monthly e-mail reminder to verify job search on{' '}
            <TextLink
              href="https://www.vinnumalastofnun.is"
              label="Vinnumálastofnun!"
            />
          </Paragraph>
        </Animate>
        <Animate animation={slideInFromRight}>
          <Card front={<SubscribeForm />} back={<SubscribeSuccess />} />
        </Animate>
      </Section>
    </Container>
  </>
)

export default Home
