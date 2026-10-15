import React from "react";
import styled from "styled-components";

import Layout from "components/Resume/Layout";
import SEO from "components/SEO";
import { Introductions } from "components/Resume/Introductions";
import { About } from "components/Resume/about";

import { siteUrl } from "../../blog-config";

const SectionWrapper = styled.section`
  width: 100%;
`;

const Title = styled.h2`
  padding: 120px 20px 8px;
  text-align: center;
  font-family: "Space Mono", monospace;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  text-transform: uppercase;
  color: #5249f4;

  @media (max-width: 767px) {
    font-size: 13px;
  }
`;

const DraftNotice = styled.aside`
  max-width: 667px;
  margin: 32px auto -32px;
  padding: 0 20px;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  word-break: keep-all;
  overflow-wrap: anywhere;
`;

const Resume = () => {
  return (
    <Layout>
      <SEO
        title="신재현 | 백엔드 개발자 이력서"
        description="Kotlin·Java와 Spring Boot를 중심으로 확장성과 유연성이 높은 백엔드 시스템을 구현하고자 하는 주니어 개발자 신재현의 이력서"
        url={`${siteUrl}resume/`}
      />
      <About />

      <DraftNotice aria-label="완료 가정 검토본 안내">
        완료 가정 검토본입니다. 오픈소스 PR 병합과 Fraud Lab의 최종 학습·서버
        연동 완료를 가정한 문안을 포함합니다. 실제 완료·병합과 검증 결과를
        확인하기 전에는 제출용 이력서로 사용하지 않습니다.
      </DraftNotice>

      <SectionWrapper aria-labelledby="open-source-title">
        <Title id="open-source-title" aria-label="오픈소스 기여">
          Open source contribute
        </Title>
        <Introductions
          title="kotlinx.serialization"
          mobileTop={60}
          descriptionWidth={646}
          detailsWidth={583}
          subTitle="개인 기여 | Kotlin·JVM | 병합 완료 가정"
          homepages={[
            {
              text: "PR #3265",
              link: "https://github.com/Kotlin/kotlinx.serialization/pull/3265",
            },
            {
              text: "Issue #3257",
              link: "https://github.com/Kotlin/kotlinx.serialization/issues/3257",
            },
          ]}
          description={`
            JSON 객체·배열 빌더에서 BigDecimal의 정밀도와 숫자 표현을 보존하는 JVM 전용 오버로드를 구현했습니다.
          `}
          infos={`
            • 문제: Number 오버로드에서 Double을 거치며 소수 정밀도·scale·지수 표현이 손실되는 호출을 재현했습니다.
            • 수정: BigDecimal 전용 경로에 JsonUnquotedLiteral을 사용하고, null과 기존 Number 타입 인자의 동작을 구분했습니다.
            • 검증: 리뷰를 반영해 공통·JVM 테스트를 분리하고, JVM·JS·Wasm·mingwX64와 공개 API 호환성을 확인했습니다.
          `}
        />
      </SectionWrapper>

      <SectionWrapper aria-labelledby="project-one-title">
        <Title id="project-one-title">Project 01</Title>
        <Introductions
          title="Fraud Lab"
          descriptionWidth={942}
          detailsWidth={627}
          subTitle="개인 프로젝트 | Kotlin·Spring Boot·Python | 완료 가정"
          homepages={[
            {
              text: "GitHub",
              link: "https://github.com/sugowslt/transaction-anomaly-detection",
            },
          ]}
          description={`
            AI Hub의 합성 카드·이체 데이터로 이상거래 후보를 판별하고, 학습한 모델을 Kotlin API·Python 추론·저장·대시보드 조회로 연결했습니다. 실제 금융 사기 탐지 성능을 검증한 결과는 아닙니다.
          `}
          infos={`
            • 입력: 거래 시점 이전의 이력만 계산하고, 시간 분할·결측·미등록 코드를 처리해 미래 정보와 정답이 입력에 섞이지 않도록 했습니다.
            • 모델: 신경망 TabM과 CatBoost를 같은 시간 분할에서 비교하고, 경보 정밀도·재현율과 유형별 미탐을 기준으로 후보를 평가했습니다.
            • 연동: 모델·전처리·특징 순서·경보 기준을 함께 버전 관리하고, 입력 검증부터 판별 결과 저장·재조회까지 일치하는지 확인했습니다.
            • 검증: 학습·서버 입력 대조와 재시도·오류 처리를 확인하고, CPU 추론 지연·메모리를 측정했습니다. 최종 모델과 성능 수치는 실제 검증 결과를 확정한 뒤 기재합니다.
          `}
        />
      </SectionWrapper>

      <SectionWrapper aria-labelledby="project-two-title">
        <Title id="project-two-title">Project 02</Title>
        <Introductions
          title="HookRelay"
          descriptionWidth={418}
          detailsWidth={587}
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
            • 동시성: FOR UPDATE SKIP LOCKED로 여러 Worker의 작업 선점을 나누고, lease 만료 후 재선점 시 lease token으로 이전 Worker의 결과 반영을 막았습니다.
            • 보안: HMAC-SHA256 서명, Idempotency-Key, URL 검증으로 전달 무결성·중복·SSRF 위험 대응
            • 복구: Retry-After, 지수 backoff, DEAD_LETTER, 수동 재전송, cursor 조회 API로 실패를 추적하고, Worker 강제 종료 후 같은 전달 ID의 복구를 확인했습니다. 전달 보장은 at-least-once로 제한했습니다.
            • 검증: PostgreSQL Testcontainers와 WireMock을 포함한 테스트 64개 및 GitHub Actions CI 통과. 두 Worker의 중복 선점 방지와 실제 HTTP 서명·재시도를 검증했습니다.
          `}
        />
      </SectionWrapper>

      <SectionWrapper aria-labelledby="project-three-title">
        <Title id="project-three-title">Project 03</Title>
        <Introductions
          title="Kotlin Backend Systems"
          mobileTop={60}
          detailsWidth={484}
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
            • 관측: Prometheus·Grafana 지표와 p95 경보를 구성하고, 드릴 트래픽을 분리해 반복 시험이 일반 요청 지표를 오염시키지 않도록 했습니다.
            • 검증: 세 저장소의 로컬 테스트 95개 통과 및 Docker Compose 통합 실행 절차 문서화
          `}
        />
      </SectionWrapper>

      <SectionWrapper aria-labelledby="experience-title">
        <Title id="experience-title" aria-label="학력 및 수상내역">
          Experience
        </Title>
        <Introductions
          title="원광대학교 컴퓨터·소프트웨어공학과"
          compact
          subTitle="2027.02 졸업 예정"
        />
        <Introductions
          title="교내 AI 활용 경진대회"
          compact
          mobileTop={12}
          subTitle="원광대학교 | 금상"
        />
      </SectionWrapper>
    </Layout>
  );
};

export default Resume;
