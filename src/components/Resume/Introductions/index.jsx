import React from "react";

import styled from "styled-components";
import { Infos } from "../Infos";

const Wrapper = styled.article`
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: ${({ $compact }) => ($compact ? "40px 20px 12px" : "40px 20px 8px")};
  text-align: center;

  @media (max-width: 767px) {
    align-items: flex-start;
    padding-top: ${({ $mobileTop }) => $mobileTop}px;
    text-align: left;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  max-width: 100%;

  @media (max-width: 767px) {
    align-items: flex-start;
  }
`;

const Title = styled.h3`
  font-size: ${({ $compact }) => ($compact ? "28px" : "40px")};
  font-weight: ${({ $compact }) => ($compact ? 600 : 700)};
  line-height: 1.5;
  word-break: keep-all;
  overflow-wrap: anywhere;

  @media (max-width: 767px) {
    font-size: ${({ $compact }) => ($compact ? "16px" : "28px")};
  }
`;

const SubTitle = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6px 8px;
  font-size: ${({ $compact }) => ($compact ? "14px" : "12px")};
  font-weight: 300;
  line-height: 1.25;
  color: rgba(0, 0, 0, 0.6);

  & > span + span {
    border-left: 1px solid rgba(0, 0, 0, 0.6);
    padding-left: 8px;
  }

  @media (max-width: 767px) {
    justify-content: flex-start;
    font-size: 12px;
  }
`;

const ExtraWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px;

  @media (max-width: 767px) {
    justify-content: flex-start;
  }
`;

const HomepageLinkText = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 20px;
  background: rgba(73, 122, 244, 0.15);
  color: #497af4;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.25;
  text-decoration: none;

  &:hover {
    background: rgba(73, 122, 244, 0.24);
    text-decoration: underline;
  }
`;

const Description = styled.p`
  width: ${({ $width }) => $width}px;
  max-width: 100%;
  line-height: 1.4;
  font-size: 16px;
  font-weight: 500;
  word-break: keep-all;
  overflow-wrap: anywhere;

  @media (max-width: 767px) {
    font-size: 12px;
  }
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
  compact = false,
  mobileTop = 40,
  descriptionWidth = 660,
  detailsWidth = 627,
}) => {
  const homepageLinks = homepages || (homepage ? [homepage] : []);

  return (
    <Wrapper>
      <Header $compact={compact} $mobileTop={mobileTop}>
        <TitleWrapper>
          <Title $compact={compact}>{title}</Title>
          {subTitle && (
            <SubTitle $compact={compact}>
              {subTitle.split("|").map((part) => (
                <span key={part.trim()}>{part.trim()}</span>
              ))}
            </SubTitle>
          )}
        </TitleWrapper>
        {homepageLinks.length > 0 && (
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
        )}
        {description && (
          <Description $width={descriptionWidth}>{description}</Description>
        )}
      </Header>
      {infos && <Infos text={infos} width={detailsWidth} />}
    </Wrapper>
  );
};
