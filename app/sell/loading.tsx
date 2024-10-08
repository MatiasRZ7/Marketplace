import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function SellRouteLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <Card>
        <CardHeader>
          <Skeleton className="w-full h-full" />
        </CardHeader>
      </Card>
    </div>
  );
}
