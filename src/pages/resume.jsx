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
        description="Kotlin·Java와 Spring Boot를 중심으로 백엔드 시스템을 구현하고 검증하는 신입 개발자 신재현의 이력서"
        url={`${siteUrl}resume/`}
      />
      <VerticalSpace size={48} />
      <About />

      <Divider />
      <SectionWrapper>
        <Title>프로젝트</Title>
        <Introductions
          title="HookRelay"
          subTitle="개인 프로젝트 | Kotlin·Spring Boot | 2026"
          homepages={[
            {
              text: "GitHub",
              link: "https://github.com/sugowslt/Kotlin_Webhook_Platform",
            },
            {
              text: "CI",
              link: "https://github.com/sugowslt/Kotlin_Webhook_Platform/actions/workflows/ci.yml",
            },
          ]}
          description={`
            Webhook 이벤트 접수와 전달을 분리하고, 중복 처리·일시적인 실패·Worker 중단을 복구하는 비동기 전달 플랫폼을 구현했습니다.
          `}
          infos={`
            • 동시성: FOR UPDATE SKIP LOCKED와 lease token으로 여러 Worker의 작업 선점과 장애 후 재처리 제어
            • 보안: HMAC-SHA256 서명, Idempotency-Key, URL 검증으로 전달 무결성·중복·SSRF 위험 대응
            • 복구: Retry-After, 지수 backoff, DEAD_LETTER, 수동 재전송, cursor 조회 API로 실패한 전달 추적 및 복구
            • 검증: PostgreSQL Testcontainers와 WireMock을 포함한 테스트 64개 및 GitHub Actions CI 통과
          `}
        />
        <Introductions
          title="Kotlin Backend Systems"
          subTitle="개인 프로젝트 시리즈 | Kotlin·Spring Boot | 2026"
          homepages={[
            {
              text: "Payment API",
              link: "https://github.com/sugowslt/kotlin-payment-core-api",
            },
            {
              text: "Async Settlement",
              link: "https://github.com/sugowslt/kotlin-order-settlement-async",
            },
            {
              text: "Observability Lab",
              link: "https://github.com/sugowslt/kotlin-backend-observability-lab",
            },
          ]}
          description={`
            결제 상태 전이, 비동기 정산, 운영 관측에서 발생하는 실패를 주제로 세 개의 Kotlin 백엔드 프로젝트를 구현했습니다.
          `}
          infos={`
            • 결제: Idempotency-Key와 DB 행 잠금으로 승인·취소 요청의 중복과 동시성 충돌 제어
            • 정산: Kafka Producer 멱등성, DB 유니크 제약, 재시도·DLT로 중복 처리와 실패 격리
            • 관측: Prometheus·Grafana 지표, p95 경보, 드릴 트래픽 분리로 알림 동작과 복구 검증
            • 검증: 세 저장소의 로컬 테스트 95개 통과 및 Docker Compose 통합 실행 절차 문서화
          `}
        />
      </SectionWrapper>

      <Divider />
      <SectionWrapper>
        <Title>학력 및 기타</Title>
        <Introductions
          title="원광대학교 컴퓨터·소프트웨어공학과"
          subTitle="2027.02 졸업 예정"
        />
        <Introductions
          title="교내 AI 활용 경진대회"
          subTitle="원광대학교 | 금상"
        />
        <Introductions title="병역" subTitle="병역필" />
      </SectionWrapper>
    </Layout>
  );
};

export default Resume;
