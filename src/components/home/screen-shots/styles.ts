import { css } from "@emotion/core";
import styled from "@emotion/styled";
import colors from "../../../styles/colors";
import buttons from "../../../styles/css/buttons";
import vars from "../../../styles/variables";

export const OptionListItem = styled.li`
  margin: 0 5px;
  user-select: none;
  flex: 1;
  max-height: 82px;
  background-color: #053361;
  border-radius: ${vars.borderRadius};

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: ${vars.borderRadius};
  }

  &.active {
    filter: drop-shadow(0 2px 4px ${colors.black});

    img {
      border: 2px solid ${colors.white};
      filter: brightness(1.2);
    }
  }

  &:hover {
    cursor: pointer;
    filter: drop-shadow(0 2px 4px ${colors.black});
    img {
      filter: brightness(1.4);
    }
  }
`;

export const OptionsNavBar = styled.nav`
  display: flex;
  align-items: center;
  margin-top: 15px;
  padding: 20px 0;
`;

export const SlideContainer = styled.div`
  flex: 2;
  position: relative;
  padding: 10px;
  border: 3px solid ${colors.white};
  border-radius: 20px;

  img {
    border-radius: 20px;
  }

  &::before {
    content: "Click image to enlarge";
    height: 24px;
    width: 40%;
    top: -12px;
    right: 50%;
    background-color: ${colors.blue.dark};
    position: absolute;
    font-size: 0.7rem;
    color: ${colors.white};
    line-height: 24px;
    padding-left: 10px;
  }

  a {
    position: relative;
    display: block;
    filter: drop-shadow(0 2px 4px ${colors.black});

    &:hover {
      img {
        filter: brightness(1.2);
      }
    }
  }

  span {
    position: absolute;
    bottom: 0;
    right: 0;
    font-weight: 700;
    color: ${colors.white};
    background-color: rgba(0, 0, 0, 0.7);
    border-bottom-right-radius: 20px;
    padding: 8px;
    border-top-left-radius: 12px;
  }
`;

export const SlideDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 40px;

  p {
    border-left: 3px solid ${colors.blue.faint};
    margin-left: -22px;
    padding-left: 15px;
  }

  a {
    ${buttons["text"]};
  }

  & > :first-child {
    height: 180px;
  }

  h3 {
    color: ${colors.white};
    margin-right: 40px;
    text-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  }
`;

export const arrowCss = css`
  outline: none;
  border: none;
  padding: 0 20px;
  background: none;
  height: 33px;

  &:hover {
    cursor: pointer;
    path {
      fill: ${colors.link.hover};
    }
  }
`;
