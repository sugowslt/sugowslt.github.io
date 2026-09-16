import React from "react";

import styled from "styled-components";
import { Infos } from "../Infos";

const Wrapper = styled.div`
  margin-top: 60px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

const Title = styled.h1`
  font-size: 22.6px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.subText};
  word-break: keep-all;
  overflow-wrap: break-word;
`;

const SubTitle = styled.h1`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.secondaryText};
  word-break: keep-all;
  overflow-wrap: break-word;
`;

const ExtraWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
  margin-top: 8px;
  margin-bottom: 16px;
`;

const HomepageLinkText = styled.a`
  font-weight: 400;
  font-size: 18px;
  color: ${(props) => props.theme.colors.link};
  word-break: break-all;
  text-decoration: none;
`;

const Description = styled.p`
  margin-bottom: 36px;
  line-height: 1.6;
  font-size: 16px;
  color: ${(props) => props.theme.colors.tertiaryText};
  word-break: keep-all;
  overflow-wrap: break-word;
`;

/**
 * @param title {string}
 * @param subTitle {string}
 * @param homepage {{text: string, link: string} | undefined}
 * @param homepages {{text: string, link: string}[] | undefined}
 * @param description {string | undefined}
 * @param infos {string | undefined}
 * @returns {JSX.Element}
 */
export const Introductions = ({
  title,
  subTitle,
  homepage,
  homepages,
  description,
  infos,
}) => {
  const homepageLinks = homepages || (homepage ? [homepage] : []);

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </TitleWrapper>
      <ExtraWrapper>
        {homepageLinks.map((item) => (
          <HomepageLinkText
            key={item.link}
            href={item.link}
            target="_blank"
            rel="noreferrer"
          >
            {item.text}
          </HomepageLinkText>
        ))}
      </ExtraWrapper>
      {description && <Description>{description}</Description>}
      {infos && <Infos text={infos} />}
    </Wrapper>
  );
};
