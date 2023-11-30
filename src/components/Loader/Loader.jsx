import { ProgressBar } from 'react-loader-spinner';

const Loader = () => {
  return (
    <>
      <ProgressBar
        height="200"
        width="100"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{ position: 'absolute', left: '50%' }}
        wrapperClass="progress-bar-wrapper"
        borderColor="chocolate"
        barColor="darkcyan"
      />
    </>
  );
};

export default Loader;
