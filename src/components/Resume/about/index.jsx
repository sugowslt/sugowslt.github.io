import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";
import { links, name } from "../../../../resume-config";

const Wrapper = styled.div`
  margin-bottom: 60px;
  display: flex;
  align-items: flex-start;

  @media (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const Profile = styled.img`
  flex: 0 0 auto;
  margin-right: 16px;
  width: 128px;
  height: 128px;
  border: 1px solid ${(props) => props.theme.colors.divider};
  border-radius: 999px;
  object-fit: cover;
  object-position: center 28%;

  @media (max-width: 600px) {
    margin: 0 0 20px;
    width: 96px;
    height: 96px;
  }
`;

const Content = styled.div`
  margin-top: 32px;

  @media (max-width: 600px) {
    margin-top: 0;
  }
`;

const Name = styled.div`
  margin-bottom: 8px;
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
`;

const Description = styled.div`
  margin-bottom: 11.2px;
  line-height: 1.6;
  font-size: 16px;
  color: ${(props) => props.theme.colors.secondaryText};
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;

  & > a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.link};
    font-size: 22px;
    text-decoration: none;
  }

  & > a:hover {
    opacity: 0.72;
  }
`;

const Email = styled.a`
  display: inline-block;
  margin-top: 14px;
  color: ${(props) => props.theme.colors.link};
  font-size: 14px;
  text-decoration: none;
`;

export const About = () => {
  return (
    <Wrapper>
      <Profile src="/profile.png" alt="신재현 프로필 사진" />
      <Content>
        <Name>{name}</Name>
        <Description>
          안녕하세요, 저는 주니어 백엔드 개발자입니다.
          <br />
          Kotlin·Java와 Spring Boot를 중심으로 확장성과 유연성이 높은 백엔드
          시스템을 구현하고자 합니다.
          <br />
          "지속적인 개선이 지연된 완벽보다 낫다." 라는 말처럼,
          <br />
          매일매일 꾸준히 성장하기 위해 노력합니다.
        </Description>
        <Email href={links.email}>sugowslt@gmail.com</Email>
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
      </Content>
    </Wrapper>
  );
};
