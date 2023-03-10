import styled from "styled-components"

export const Container = styled.div<{ _height: number }>`
  font-size: 1rem;
  height: ${({ _height }) => _height}px;
  margin: 2rem;
`

export const Stickey = styled.p`
  position: sticky;
  top: 50vh;

  text-align: center;
  word-break: keep-all;
  white-space: pre-line;
  font-family: "NanumSquareNeo";
`
