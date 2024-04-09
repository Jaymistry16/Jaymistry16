import { Html, useProgress } from "@react-three/drei";
import { FunctionComponent } from "react";

interface LoaderProps {}

export const Loader: FunctionComponent<LoaderProps> = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"> </span>
      <p
        style={{
          fontSize: 14,
          color: "f1f1f1",
          fontWeight: 800,
          marginTop: 14,
        }}
      >
        {" "}
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};
