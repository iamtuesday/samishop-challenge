import { useRouter } from "next/navigation";

interface BreadCumbProps {
  label: string;
  type: "primary" | "secondary";
}

export const BreadCumb: React.FC<BreadCumbProps> = ({
  label,
  type = "primary",
}) => {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push("/")}>Go home</button>
      <h1>{label}</h1>
    </div>
  );
};
