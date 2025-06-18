import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface TrackingStatus {
  status: string;
  date: string;
  location: string;
  description: string;
}

const DeliveryTracker = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingData, setTrackingData] = useState<TrackingStatus[] | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);

  const mockTrackingData: TrackingStatus[] = [
    {
      status: "delivered",
      date: "2024-01-15 14:30",
      location: "Москва, пункт выдачи",
      description: "Заказ получен получателем",
    },
    {
      status: "in_transit",
      date: "2024-01-15 09:15",
      location: "Москва, сортировочный центр",
      description: "Прибыл в пункт выдачи",
    },
    {
      status: "in_transit",
      date: "2024-01-14 18:20",
      location: "Московская область",
      description: "В пути к получателю",
    },
    {
      status: "shipped",
      date: "2024-01-13 12:00",
      location: "Склад отправителя",
      description: "Передан в службу доставки СДЭК",
    },
  ];

  const handleTrack = async () => {
    if (!trackingNumber.trim()) return;

    setIsLoading(true);
    // Имитация API запроса
    setTimeout(() => {
      setTrackingData(mockTrackingData);
      setIsLoading(false);
    }, 1000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800";
      case "in_transit":
        return "bg-blue-100 text-blue-800";
      case "shipped":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "delivered":
        return "Доставлен";
      case "in_transit":
        return "В пути";
      case "shipped":
        return "Отправлен";
      default:
        return "Обрабатывается";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <Icon name="Package" size={24} className="text-primary" />
          Отследить заказ
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="Введите номер отслеживания"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleTrack} disabled={isLoading}>
            {isLoading ? (
              <Icon name="Loader2" size={16} className="animate-spin" />
            ) : (
              <Icon name="Search" size={16} />
            )}
          </Button>
        </div>

        {trackingData && (
          <div className="space-y-3">
            <h4 className="font-semibold text-lg">История перемещений</h4>
            <div className="space-y-3">
              {trackingData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 border rounded-lg"
                >
                  <div className="flex-shrink-0">
                    <Badge className={getStatusColor(item.status)}>
                      {getStatusText(item.status)}
                    </Badge>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <p className="font-medium text-sm">{item.description}</p>
                      <span className="text-xs text-gray-500">{item.date}</span>
                    </div>
                    <p className="text-xs text-gray-600">{item.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DeliveryTracker;
