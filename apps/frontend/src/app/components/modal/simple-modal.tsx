import React, { PropsWithChildren } from 'react';

interface Props {
  onActionClick?: () => void;
  setShowModal: (show: boolean) => void;
  modalCloseCallback?: () => void;
  title: string;
}

const SimpleModal: React.FC<PropsWithChildren<Props>> = (props) => {
  const onActionClicked = () => {
    props.onActionClick ? props.onActionClick() : console.log('No Action')
    props.setShowModal(false);
  };

  const closeModal = () => {
    if (props.modalCloseCallback) {
      props.modalCloseCallback();
    }
    props.setShowModal(false);
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div
          className="relative w-1/2 my-6 mx-auto max-w-3xl"
          style={{ maxHeight: '35rem' }}
        >
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-lg font-medium text-gray-800">{props.title}</h3>
              <button
                className="ml-auto bg-transparent border-0 text-black opacity-3 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={closeModal}
              >
                <span className="text-gray-600 flex items-center h-6 w-6">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-4 flex-auto">{props.children}</div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default SimpleModal;
