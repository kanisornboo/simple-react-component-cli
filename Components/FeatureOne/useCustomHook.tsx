import React from "react";

type Props = {};

const useCustomHook = (props: Props) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return {
    isLoading,
    setIsLoading
  };
};
