"use client";

import React from "react";
import { NextStudioLoading } from "next-sanity/studio/loading";
import config from "../../../../sanity.config";

const Loading = (): JSX.Element => <NextStudioLoading config={config} />;

export default Loading;
