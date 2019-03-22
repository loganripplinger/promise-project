import styled from "styled-components";

export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid rgb(246, 246, 246);
  text-align: left;
  height: 0.75em;
  margin-bottom: 20px;
`;

export const NowLine = styled.div`
  width: 100%;
  border-bottom: 1px dashed lightgray;
  text-align: left;
  height: 0.9em;
  margin-top: 40px;
  margin-bottom: 60px;
`;

export const NowBlock = styled.span`
  font-family: "Roboto Mono", monospace;
  font-size: 0.75em;
  background-color: white;
  padding-right: 0.75em;
`;
