import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const tickets = [
  { id: 1, title: "Leaky faucet", status: "Open" },
  { id: 2, title: "Broken window", status: "In Progress" },
  { id: 3, title: "No heating", status: "Closed" },
]

export default function RecentTickets() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Tickets</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {tickets.map((ticket) => (
            <li key={ticket.id} className="flex items-center justify-between">
              <span>{ticket.title}</span>
              <Badge variant={ticket.status === "Closed" ? "secondary" : ticket.status === "In Progress" ? "outline" : "default"}>
                {ticket.status}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
} 