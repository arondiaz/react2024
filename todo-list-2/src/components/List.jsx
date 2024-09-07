const List = ({ children }) => {
  return (
    <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-xl">
      {children}
    </div>
  );
};

export default List;
