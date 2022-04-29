import React from "react";
import { Helmet } from "react-helmet";

export default function Title(props) {
  let { name } = props;
  return (
    <Helmet>
      <title>{name}</title>
    </Helmet>
  );
}
