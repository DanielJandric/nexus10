import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Overview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">Welcome to your dashboard!</div>
        <div className="text-muted-foreground mt-2">Here you can manage properties, tickets, and more.</div>
      </CardContent>
    </Card>
  )
} 