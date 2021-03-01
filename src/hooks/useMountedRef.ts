import { useEffect, useRef } from "react";

// 判断当前页面是否被卸载了
const useMountedRef = () => {
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  });

  return mountedRef;
};

export default useMountedRef;
