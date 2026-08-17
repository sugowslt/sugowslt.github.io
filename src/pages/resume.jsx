import React from "react";
import styled from "styled-components";

import Layout from "components/Layout";
import SEO from "components/SEO";
import Divider from "components/Divider";
import VerticalSpace from "components/VerticalSpace";
import { Introductions } from "components/Resume/Introductions";
import { About } from "components/Resume/about";

import { siteUrl } from "../../blog-config";

const SectionWrapper = styled.div`
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const Title = styled.h1`
  font-size: 33.6px;
  font-weight: 300;
  color: ${(props) => props.theme.colors.text};
  word-break: keep-all;
`;

const Resume = () => {
  return (
    <Layout>
      <SEO
        title="신재현 | 백엔드 개발자 이력서"
        description="Java와 Kotlin, Spring Boot를 중심으로 백엔드를 공부하고 구현하는 신입 개발자 신재현의 이력서"
        url={`${siteUrl}resume/`}
      />
      <VerticalSpace size={48} />
      <About />

      <Divider />
      <SectionWrapper>
        <Title>프로젝트</Title>
        <Introductions
          title="Kotlin Payment Core API"
          subTitle="개인 프로젝트 | Backend"
          homepage={{
            text: "GitHub Profile",
            link: "https://github.com/sugowslt",
          }}
          description={`
            결제 승인부터 취소, 정산까지의 흐름에서 데이터 정합성과 장애 대응을 다룬 백엔드 프로젝트입니다.
          `}
          infos={`
            • Kotlin, Spring Boot 기반 결제 승인·취소·정산 API와 상태 전이 구현
            • Idempotency-Key와 비관적 락으로 중복 요청 및 동시성 충돌 제어
            • 외부 결제사 오류 유형별 재시도 정책과 Outbox 기반 이벤트 복구 흐름 구성
            • H2 75개, MySQL·Redis 74개 테스트로 핵심 결제 흐름 검증
          `}
        />
      </SectionWrapper>

      <Divider />
      <SectionWrapper>
        <Title>학력 및 기타</Title>
        <Introductions
          title="원광대학교 컴퓨터·소프트웨어공학과"
          subTitle="2027.02 졸업 예정"
          description="2026년 2학기 취업계를 활용해 2026.09.02부터 풀타임 근무가 가능합니다."
        />
        <Introductions
          title="교내 AI 활용 경진대회 금상"
          subTitle="원광대학교"
        />
        <Introductions title="병역 의무 이행 완료" subTitle="병역필" />
      </SectionWrapper>
    </Layout>
  );
};

export default Resume;
