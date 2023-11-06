import Market from "@/components/Market";
import User from "@/components/User";

const Page = () => {
  return (
    <>
      <div className="grid h-full w-full grid-rows-2">
        <Market />
        <User />
      </div>
    </>
  );
};

export default Page;
