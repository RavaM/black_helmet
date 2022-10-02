import { useEffect } from "react";
import "./Modal.scss";

export const Modal = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "initial";
    };
  }, []);

  return (
    <div className="modal__background">
      <div className="modal">
        <h1>Modal</h1>
      </div>
    </div>
  );
};
