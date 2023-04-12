import { Alert, AlertIcon, Stack } from "@chakra-ui/react";
import React from "react";

export default function AlertUi(props) {
  const { children, status,style } = props;
  return (
    <>
      <Stack spacing={3}>
        <Alert status={status} className={style}>
          <AlertIcon />
          {children}
        </Alert>
      </Stack>
    </>
  );
}
