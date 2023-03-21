import {
  FlavorInfo,
  FlavorProps,
} from "@/types/FlavorProgress/FlavorSummaryTypes";
import FlavorProgressCompo from "./FlavorProgressCompo";

export default function FlavorProgressListCompo({ flavors }: FlavorProps) {
  return (
    <>
      {flavors.map((item: FlavorInfo, index) => (
        <div key={index}>
          <FlavorProgressCompo value={item.value} type={item.type} />
        </div>
      ))}
    </>
  );
}
