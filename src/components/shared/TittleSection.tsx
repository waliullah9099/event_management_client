type TTitleDecsTypes = {
  title: string;
  decs: string;
};

const TittleSection = ({ title, decs }: TTitleDecsTypes) => {
  return (
    <div className="text-center flex flex-col justify-center items-center gap-4 py-8">
      <h1 className="text-secondary font-bold text-4xl">{title}</h1>
      <p className="lg:w-[60%] px-4 text-lg">{decs}</p>
    </div>
  );
};

export default TittleSection;
