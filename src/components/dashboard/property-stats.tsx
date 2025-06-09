import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PropertyStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Property Stats</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span>Total Properties</span>
            <span className="font-bold">12</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Occupied</span>
            <span className="font-bold">9</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Vacant</span>
            <span className="font-bold">3</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 