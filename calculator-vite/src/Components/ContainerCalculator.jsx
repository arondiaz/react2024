/* eslint-disable react/prop-types */
const ContainerCalculator = ({ children }) => {
  return (
    <div className="flex flex-col justify-center max-w-xs container">
      {children}
    </div>
  );
};

export default ContainerCalculator;
