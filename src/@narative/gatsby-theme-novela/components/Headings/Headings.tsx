import styled from "@emotion/styled";
import { css } from "@emotion/core";

import mediaqueries from "@styles/media";

/**
 * Example:
 * <Heading.h1>Lorem Ipsum</Heading.h1>
 */

const commonStyles = p => css`
  font-weight: bold;
  color: ${p.theme.colors.primary};
  font-family: ${p.theme.fonts.serif};
`;

const h1 = styled.h1`
  word-break: keep-all;
  font-size: 52px;
  line-height: 1.15;
  ${commonStyles};

  ${mediaqueries.desktop`
    font-size: 38px;
    line-height: 1.2;
  `};

  ${mediaqueries.phablet`
    font-size: 32px;
    line-height: 1.3;
  `};
`;

const h2 = styled.h2`
  word-break: keep-all;
  font-size: 32px;
  line-height: 1.333;
  ${commonStyles};

  ${mediaqueries.desktop`
    font-size: 21px;
  `};

  ${mediaqueries.tablet`
    font-size: 24px;
    line-height: 1.45;
  `};

  ${mediaqueries.phablet`
    font-size: 22px;
  `};
`;

const h3 = styled.h3`
  word-break: keep-all;
  font-size: 26px;
  line-height: 1.45;
  ${commonStyles};

  ${mediaqueries.tablet`
    font-size: 22px;
  `};

  ${mediaqueries.phablet`
    font-size: 20px;
  `};
`;

const h4 = styled.h4`
  word-break: keep-all;
  font-size: 22px;
  line-height: 1.45;
  ${commonStyles};

  ${mediaqueries.phablet`
    font-size: 16px;
  `};
`;

const h5 = styled.h5`
  word-break: keep-all;  
  font-size: 18px;
  line-height: 1.45;
  ${commonStyles};

  ${mediaqueries.phablet`
    font-size: 16px;
  `};
`;

const h6 = styled.h6`
  word-break: keep-all;
  font-size: 16px;
  line-height: 1.45;
  ${commonStyles};

  ${mediaqueries.phablet`
    font-size: 14px;
  `};
`;

const logoDesktop = styled.h2`
  font-weight: 900;
  color: #395FC1;
  font-family: "Noto Sans KR";
  
  word-break: keep-all;
  font-size: 32px;
  line-height: 1.333;

  ${mediaqueries.desktop`
    font-size: 21px;
  `};

  ${mediaqueries.tablet`
    font-size: 24px;
    line-height: 1.45;
  `};

  ${mediaqueries.phablet`
    font-size: 22px;
  `};
`;

const logoDesktopSub = styled.h2`
  font-weight: 600;
  color: lightgray;
  font-family: "Noto Sans KR";
  
  word-break: keep-all;
  font-size: 32px;
  line-height: 1.333;

  ${mediaqueries.desktop`
    font-size: 21px;
  `};

  ${mediaqueries.tablet`
    font-size: 24px;
    line-height: 1.45;
  `};

  ${mediaqueries.phablet`
    font-size: 22px;
  `};
`;

const logoMobile = styled.h4`
  font-weight: 900;
  color: #395FC1;
  font-family: "Noto Sans KR", sans-serif;
  
  word-break: keep-all;
  font-size: 24px;
  line-height: 1.45;

  ${mediaqueries.tablet`
    font-size: 22px;
  `};

  ${mediaqueries.phablet`
    font-size: 20px;
  `};
`;

const logoMobileSub = styled.h4`
  font-weight: 600;
  color: lightgray;
  font-family: "Noto Sans KR", sans-serif;
  
  word-break: keep-all;
  font-size: 24px;
  line-height: 1.45;

  ${mediaqueries.tablet`
    font-size: 22px;
  `};

  ${mediaqueries.phablet`
    font-size: 20px;
  `};
`;

export default {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  logoDesktop,
  logoDesktopSub,
  logoMobile,
  logoMobileSub,
};
