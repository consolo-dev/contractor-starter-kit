/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import Translate, { translate } from "@docusaurus/Translate";

export type FeatureItem = {
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  text: JSX.Element;
  to?: string;
};

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      message: "Legal Templates",
      id: "homepage.features.powered-by-mdx.title",
    }),
    image: {
      src: "/img/undraw_contract.svg",
      width: 1009.54,
      height: 717.96,
    },
    text: (
      <Translate id="homepage.features.powered-by-mdx.text">
        Use our templates for contracts and invoices to make sure you are
        protected in your contracting engagements.
      </Translate>
    ),
    to: "/docs/contracts/hourly",
  },
  {
    title: translate({
      message: "Recommendations",
      id: "homepage.features.built-using-react.title",
    }),
    image: {
      src: "/img/undraw_programming.svg",
      width: 1108,
      height: 731.18,
    },
    text: (
      <Translate id="homepage.features.built-using-react.text">
        Get tool recommendations from other contractors use in their agencies
        (and wish they knew when they started).
      </Translate>
    ),
    to: "docs/tools",
  },
  {
    title: translate({
      message: "Taxes",
      id: "homepage.features.built-using-react.title",
    }),
    image: {
      src: "/img/undraw_payment.svg",
      width: 1108,
      height: 731.18,
    },
    text: (
      <Translate id="homepage.features.built-using-react.text">
        Get tool recommendations from other contractors use in their agencies
        (and wish they knew when they started).
      </Translate>
    ),
    to: "docs/taxes",
  },
  {
    title: translate({
      message: "Calculate Your Rate",
      id: "homepage.features.built-using-react.title",
    }),
    image: {
      src: "/img/undraw_wallet.svg",
      width: 1108,
      height: 731.18,
    },
    text: (
      <Translate id="homepage.features.built-using-react.text">
        Make sure you aren't undercharging for your services. Learn how much you
        need to make to go full-time.
      </Translate>
    ),
    to: "docs/decide_your_rate",
  },
  {
    title: translate({
      message: "Contribute",
      id: "homepage.features.built-using-react.title",
    }),
    image: {
      src: "/img/undraw_os.svg",
      width: 1108,
      height: 731.18,
    },
    text: (
      <Translate id="homepage.features.built-using-react.text">
        Contribute your own experiences and suggestions to our Github repo in
        the form of pull requests or issues.
      </Translate>
    ),
    to: "https://github.com/consolo-dev/contractor-starter-kit",
  },
];

export default FEATURES;
