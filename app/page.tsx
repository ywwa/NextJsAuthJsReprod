import { signIn } from "@/auth";

export default function Home() {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}
