import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const UserInfoPage = async () => {
  const session = await getServerSession(authOptions)
  return (

    <div className="p-4">
      <h1 className="text-4xl mt-10">User Info</h1>
      <div className="max-w-[500px] mx-auto mt-5">
        <h1 className="mt-4 md:text-lg font-semibold">Name : {session?.user?.name}</h1>
        <h1 className="mt-2 md:text-lg font-semibold">Email : {session?.user?.email}</h1>
        <Image src={session?.user?.image as string} alt={session?.user?.name as string} width={400} height={400} className="mt-5 rounded-full" />
      </div>
    </div>
  );
};

export default UserInfoPage;
