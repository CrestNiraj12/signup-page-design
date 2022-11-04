const InfoLayout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <div className="flex w-full h-[100vh] justify-center items-center">
      {children}
    </div>
  );
};

export default InfoLayout;
