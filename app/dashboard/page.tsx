import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Coach Dashboard!</h1>
      <p className="mb-8">You are securely logged in.</p>
      
      {/* This is the magic logout button from Clerk */}
      <div className="flex justify-center">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}