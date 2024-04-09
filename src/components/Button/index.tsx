import styled, { css } from "styled-components";

type ButtonPropsType = {
  type: "outlined" | "contained";
};

export const Button = styled.button<ButtonPropsType>`
  width: 86px;
  height: 30px;
  cursor: pointer;

  border-radius: 5px;

  font-size: 10px;
  font-weight: 700;
  line-height: 20px;
  text-align: center;

  ${(props) =>
    props.type === "contained" &&
    css<ButtonPropsType>`
      border: none;
      background-color: #4e71fe;
      color: #fff;

      &:hover {
        background-color: #e29e28;
        transition: 0.3s;
      }
    `}

  ${(props) =>
    props.type === "outlined" &&
    css<ButtonPropsType>`
      border: 2px solid #4e71fe;
      background-color: transparent;
      color: #4e71fe;

      &:hover {
        border-color: #e29e28;
        color: #e29e28;
        transition: 0.3s;
      }
    `}
`;
