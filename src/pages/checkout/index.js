import React from "react";
import styled from "styled-components";

import { useRouter } from "apis/history";
import { useQuery } from "styles/breakpoints";
import { background } from "styles/colors";

import {
  Button,
  H1,
  H2,
  H3,
  Image,
  PrimaryButton,
  SecondaryButton,
  TextBase,
  TextBaseBold,
  TextRegular,
  TextSmall,
  TextCaption,
} from "components";

const Checkout = () => {
  const { goToLanding } = useRouter();
  return (
    <SectionWrapper>
      <H1>Heading</H1>
      <H2>Heading</H2>
      <H3>Heading</H3>
      <Button>Button</Button>
      <PrimaryButton>Primary</PrimaryButton>
      <SecondaryButton>Secondary</SecondaryButton>
      <TextBase>TextBase</TextBase>
      <TextBaseBold>TextBaseBold</TextBaseBold>
      <TextRegular>TextBaseRegular</TextRegular>
      <TextSmall>TextBaseSmall</TextSmall>
      <TextCaption>TextBaseCaption</TextCaption>
      <Image src="lp_image" onClick={goToLanding} />
    </SectionWrapper>
  );
};

const SectionWrapper = styled.div`
  margin: 3rem 0;
  padding: 2rem 0;
  background-color: ${background};
`;

export default Checkout;
