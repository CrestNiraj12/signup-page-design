import Line from "../atoms/Line";
import Text from "../atoms/Text";

export default function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`${className} w-full flex justify-evenly items-center`}>
      <Line />
      <Text className="mx-2 font-bold">Or</Text>
      <Line />
    </div>
  );
}
