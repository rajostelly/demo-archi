"use client";

import { Badge } from "@/components/pieces/badge";
import React from "react";
import { useStore } from "@/stores/exemple";
import { Button } from "@/components/pieces/button";
import { useTranslations, useLocale } from "next-intl";

type Props = {};

const Login = (props: Props) => {
  const { count, inc } = useStore();
  const t = useTranslations("Home");
  const locale = useLocale();
  console.log("locale", locale);
  console.log("t", t("title"));

  return (
    <div className="mr-20 bg-green-200 pl-12">
      Login
      <h1 className="text-3xl">{t("title")}</h1>
      <Badge aria-checked variant={"platform"}>
        New
      </Badge>
      <span></span>
      <span>{count}</span>
      <Button onClick={inc}>one up</Button>
    </div>
  );
};

export default Login;
