import React from "react";

import styled from "styled-components";

const Wrapper = styled.dl`
  width: 100%;
  max-width: ${({ $width }) => $width}px;
  margin: 10px auto 0;
  padding: 12px 0;

  @media (max-width: 767px) {
    margin-top: 0;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 32px minmax(0, 1fr);
  align-items: start;
  column-gap: 36px;
  padding: 6px 20px;
  font-size: 12px;
  line-height: 1.4;
  word-break: keep-all;
  overflow-wrap: anywhere;
`;

const Label = styled.dt`
  font-weight: 300;
  color: rgba(0, 0, 0, 0.6);
`;

const Text = styled.dd`
  min-width: 0;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
`;

/**
 *
 * @param text {string}
 * @returns {JSX.Element}
 * @constructor
 */
export const Infos = ({ text, width = 627 }) => {
  const rows = text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const match = line.match(/^•\s*([^:]+):\s*(.*)$/);
      return match
        ? { label: match[1], content: match[2] }
        : { label: "내용", content: line };
    });

  return (
    <Wrapper $width={width}>
      {rows.map(({ label, content }) => (
        <Row key={`${label}-${content}`}>
          <Label>{label}</Label>
          <Text>{content}</Text>
        </Row>
      ))}
    </Wrapper>
  );
};
