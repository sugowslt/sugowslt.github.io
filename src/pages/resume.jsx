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
    display: ${({ $desktopOnly }) => ($desktopOnly ? "none" : "block")};
    font-size: 13px;
  }
`;

const DesktopLabel = styled.span`
  @media (max-width: 767px) {
    display: none;
  }
`;

const MobileLabel = styled.span`
  display: none;

  @media (max-width: 767px) {
    display: inline;
  }
`;

const Resume = () => {
  return (
    <Layout>
      <SEO
        title="신재현 | 백엔드 개발자 이력서"
        description="Kotlin·Java와 Spring Boot를 중심으로 확장성과 유연성이 높은 백엔드 시스템을 구현하고자 하는 주니어 개발자 신재현의 이력서"
        socialTitle="신재현 | 백엔드 개발자"
        socialDescription="Kotlin·Java·Spring Boot 프로젝트와 오픈소스 기여"
        url={`${siteUrl}resume/`}
      />
      <About />

      <SectionWrapper aria-labelledby="open-source-title">
        <Title id="open-source-title" aria-label="오픈소스 기여">
          Open source contribute
        </Title>
        <Introductions
          title="kotlinx.serialization"
          mobileTop={60}
          descriptionWidth={646}
          detailsWidth={583}
          subTitle="오픈소스 기여 | Kotlin·JVM | 병합 예정"
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
            JSON 객체·배열 빌더에서 BigDecimal의 정밀도와 숫자 표현을 보존하는 JVM 전용 오버로드 구현
          `}
          infos={`
            • 문제: Number 오버로드에서 Double을 거치며 소수 정밀도·scale·지수 표현이 손실되는 호출을 재현
            • 수정: BigDecimal 전용 경로에 JsonUnquotedLiteral을 사용하고, null과 기존 Number 타입 인자의 동작 구분
            • 검증: 리뷰를 반영해 공통·JVM 테스트를 분리하고, JVM·JS·Wasm·mingwX64와 공개 API 호환성 확인
          `}
        />
      </SectionWrapper>

      <SectionWrapper aria-labelledby="project-one-title">
        <Title id="project-one-title">
          <DesktopLabel>PROJECT 01</DesktopLabel>
          <MobileLabel>PROJECT</MobileLabel>
        </Title>
        <Introductions
          title="Fraud Lab"
          descriptionWidth={942}
          detailsWidth={627}
          subTitle="개인 프로젝트 | Kotlin·Spring Boot·Python | 진행중"
          homepages={[
            {
              text: "GitHub",
              link: "https://github.com/sugowslt/transaction-anomaly-detection",
            },
          ]}
          description={`
            AI Hub의 합성 카드·이체 데이터로 이상거래 후보 판별, 학습한 모델을 Kotlin API·Python 추론·저장·대시보드 조회로 연결
          `}
          infos={`
            • 입력: 거래 시점 이전의 이력만 계산하고, 시간 분할·결측·미등록 코드를 처리
            • 모델: 신경망 TabM과 CatBoost를 동일한 시간 분할에서 비교, 경보 정밀도·재현율과 유형별 미탐을 기준으로 후보 평가
            • 연동: 모델·전처리·특징 순서·경보 기준을 함께 버전 관리, 입력 검증부터 판별 결과 저장·재조회까지 일치 확인
            • 검증: 학습·서버 입력 대조와 재시도·오류 처리를 확인하고, CPU 추론 지연·메모리 측정
          `}
        />
      </SectionWrapper>

      <SectionWrapper aria-labelledby="project-two-title">
        <Title id="project-two-title" $desktopOnly>
          PROJECT 02
        </Title>
        <Introductions
          title="HookRelay"
          descriptionWidth={418}
          detailsWidth={587}
          subTitle="개인 프로젝트 | Kotlin, Spring Boot | 2026"
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
            Webhook 이벤트 접수와 전달을 분리하고, 중복 처리·일시적인 실패·Worker 중단을 복구하는 비동기 전달 플랫폼 구현
          `}
          infos={`
            • 동시성: FOR UPDATE SKIP LOCKED와 lease token으로 여러 Worker의 작업 선점과 장애 후 재처리 제어
            • 보안: HMAC-SHA256 서명, Idempotency-Key, URL 검증으로 전달 무결성·중복·SSRF 위험 대응
            • 복구: Retry-After, 지수 backoff, DEAD_LETTER, 수동 재전송, cursor 조회 API로 실패한 전달 추적 및 복구
            • 검증: PostgreSQL Testcontainers와 WireMock을 포함한 테스트 64개 및 GitHub Actions CI 통과
          `}
        />
      </SectionWrapper>

      <SectionWrapper aria-labelledby="project-three-title">
        <Title id="project-three-title" $desktopOnly>
          PROJECT 03
        </Title>
        <Introductions
          title="Kotlin Backend Systems"
          mobileTop={60}
          detailsWidth={484}
          subTitle="개인 프로젝트 시리즈 | Kotlin, Spring Boot | 2026"
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
            결제 상태 전이, 비동기 정산, 운영 관측에서 발생하는 실패를 주제로 세 개의 Kotlin 백엔드 프로젝트 구현
          `}
          infos={`
            • 결제: Idempotency-key와 DB 행 잠금으로 승인·취소 요청의 중복과 동시성 충돌 제어
            • 정산: Kafka Producer 멱등성, DB 유니크 제약, 재시도·DLT로 중복 처리와 실패 격리
            • 관측: Prometheus, Grafana 지표, p95 경보, 드릴 트래픽 분리로 알림 동작과 복구 검증
            • 검증: 세 저장소의 로컬 테스트 95개 통과 및 Docker Compose 통합 실행 절차 문서화
          `}
        />
      </SectionWrapper>

      <SectionWrapper aria-labelledby="experience-title">
        <Title id="experience-title" aria-label="학력 및 수상내역">
          Experience
        </Title>
        <Introductions
          title="원광대학교 컴퓨터·소프트웨어 공학과"
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
