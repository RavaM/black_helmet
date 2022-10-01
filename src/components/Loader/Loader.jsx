import { Html, useProgress } from "@react-three/drei";
import "./Loader.scss";

export const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="progress-bar">
        <div className="circle border"></div>
      </div>
      <div className="progress">{parseInt(progress)} %</div>
    </Html>
  );
};
