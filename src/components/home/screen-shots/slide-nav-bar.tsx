/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useContext } from "react";
import { CarouselContext } from "./carousel";
import { arrowCss, OptionListItem, OptionsNavBar } from "./styles";
import { ReactComponent as ArrowSvg } from "../../../images/carousel-arrow.svg";
import { flex } from "../../../styles/css/alignment";

const SliderNavBar: React.FC = ({ children }) => {
  const { shiftRight, shiftLeft, setSelected, selected, maxNavItems } = useContext(
    CarouselContext,
  );
  const thumbnails: React.ReactNode[] = [];

  // collect a list of thumbnail images from children and sort them based on order state
  React.Children.forEach(children, (img, originalPosition) => {
    // order = an array of positions based on user interaction stored in order state
    // const orderedPosition = order[originalPosition];
    thumbnails[originalPosition] = img;
  });

  return (
    <OptionsNavBar role="toolbar">
      <button onClick={shiftRight} css={arrowCss}>
        <ArrowSvg title="previous" />
      </button>

      <ul css={flex}>
        {thumbnails.slice(0, maxNavItems).map((img, index) => (
          <OptionListItem
            key={index}
            onClick={() => setSelected(index)}
            className={index === selected ? "active" : ""}
          >
            {img}
          </OptionListItem>
        ))}
      </ul>

      <button
        onClick={shiftLeft}
        css={[
          arrowCss,
          css`
            transform: rotate(180deg);
          `,
        ]}
      >
        <ArrowSvg title="next" />
      </button>
    </OptionsNavBar>
  );
};

export default SliderNavBar;
