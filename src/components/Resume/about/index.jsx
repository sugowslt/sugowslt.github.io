import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";
import { links, name } from "../../../../resume-config";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 60px 20px 100px;
  background: #f3f3f3;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 0;
    padding: 60px 0 40px;
  }
`;

const MobileLabel = styled.p`
  display: none;

  @media (max-width: 767px) {
    display: block;
    padding: 0 20px 68px;
    font-family: "Space Mono", monospace;
    font-size: 13px;
    line-height: 1.5;
    text-transform: uppercase;
  }
`;

const Profile = styled.img`
  flex: 0 0 auto;
  display: block;
  width: 220px;
  height: 290px;
  object-fit: cover;
  object-position: center top;
  background: #c2c2c2;

  @media (max-width: 767px) {
    width: 108px;
    height: 142px;
    margin-bottom: 8px;
  }
`;

const Content = styled.div`
  width: 393px;
  max-width: 100%;

  @media (max-width: 767px) {
    text-align: center;
  }
`;

const Identity = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px 20px;
`;

const Name = styled.h1`
  font-size: 28px;
  font-weight: 500;
  line-height: 1.25;

  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

const Role = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.25;

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  word-break: keep-all;
  overflow-wrap: anywhere;

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 20px;

  & > a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    color: #111;
    font-size: 24px;
    text-decoration: none;
    border-radius: 50%;
  }

  & > a:hover {
    color: #497af4;
  }

  @media (max-width: 767px) {
    justify-content: center;
  }
`;

const Email = styled.a`
  display: block;
  padding: 8px 20px;
  color: #497af4;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const About = () => {
  return (
    <Wrapper aria-labelledby="resume-name">
      <MobileLabel>Introduce</MobileLabel>
      <Profile
        src="/profile.png"
        alt="신재현 프로필 사진"
        width={220}
        height={290}
      />
      <Content>
        <Identity>
          <Name id="resume-name">{name}</Name>
          <Role>Junior Backend Developer</Role>
        </Identity>
        <Description>
          <p>
            안녕하세요, 저는 주니어 백엔드 개발자입니다.
            <br />
            Kotlin·Java와 Spring Boot를 중심으로 확장성과 유연성이 높은 백엔드
            시스템을 구현하고자 합니다.
          </p>
          <p>
            "지속적인 개선이 지연된 완벽보다 낫다." 라는 말처럼,
            <br />
            매일매일 꾸준히 성장하기 위해 노력합니다.
          </p>
        </Description>
        <Links aria-label="외부 프로필">
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub 프로필"
            title="GitHub"
          >
            <FaGithub aria-hidden="true" />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn 프로필"
            title="LinkedIn"
          >
            <FaLinkedin aria-hidden="true" />
          </a>
        </Links>
        <Email href={links.email}>sugowslt@gmail.com</Email>
      </Content>
    </Wrapper>
  );
};
