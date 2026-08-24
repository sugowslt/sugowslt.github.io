import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";
import { links, name } from "../../../../resume-config";

const Wrapper = styled.div`
  margin-bottom: 60px;
  display: flex;
  align-items: center;

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
      <div>
        <Name>{name}</Name>
        <Description>
          Java와 Kotlin, Spring Boot를 중심으로 백엔드를 공부하고 구현하는 신입
          개발자입니다.
        </Description>
        <Description>
          기능 구현에 그치지 않고 데이터 정합성과 실패 상황을 고려하며, 선택한
          설계를 재현 가능한 테스트로 확인합니다.
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
      </div>
    </Wrapper>
  );
};
