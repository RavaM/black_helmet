import { useEffect } from "react";
import { modalData } from "../../data";
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
        <h1 className="modal__title">Modal</h1>
        <div className="modal__text-container">
          {modalData.map((data) => (
            <p className="modal__text" key={data.index}>
              {data.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
