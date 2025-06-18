import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface PaymentMethod {
  id: string;
  name: string;
  description: string;
  icon: string;
  isPopular?: boolean;
  commission?: number;
}

interface PaymentMethodsProps {
  totalAmount: number;
  onPaymentSelect: (method: string) => void;
}

const PaymentMethods = ({
  totalAmount,
  onPaymentSelect,
}: PaymentMethodsProps) => {
  const [selectedMethod, setSelectedMethod] = useState<string>("card");

  const paymentMethods: PaymentMethod[] = [
    {
      id: "card",
      name: "Банковская карта",
      description: "Visa, MasterCard, МИР",
      icon: "CreditCard",
      isPopular: true,
    },
    {
      id: "yukassa",
      name: "ЮKassa",
      description: "Быстрая оплата через ЮKassa",
      icon: "Wallet",
    },
    {
      id: "sberbank",
      name: "Сбербанк Онлайн",
      description: "Оплата через Сбербанк Онлайн",
      icon: "Building2",
    },
    {
      id: "tinkoff",
      name: "Тинькофф",
      description: "Оплата через Тинькофф",
      icon: "CreditCard",
    },
    {
      id: "cloud-payments",
      name: "CloudPayments",
      description: "Безопасная оплата картой",
      icon: "Cloud",
    },
    {
      id: "cash",
      name: "Наличными",
      description: "Оплата при получении",
      icon: "Banknote",
    },
  ];

  const handlePaymentSelect = (methodId: string) => {
    setSelectedMethod(methodId);
    onPaymentSelect(methodId);
  };

  const handleProceedToPayment = () => {
    // Здесь будет интеграция с выбранным платежным провайдером
    console.log(
      `Proceeding with payment method: ${selectedMethod}, amount: ${totalAmount}`,
    );

    // Пример интеграции с разными провайдерами
    switch (selectedMethod) {
      case "yukassa":
        // Интеграция с ЮKassa
        window.location.href = `/api/payment/yukassa?amount=${totalAmount}`;
        break;
      case "sberbank":
        // Интеграция со Сбербанком
        window.location.href = `/api/payment/sberbank?amount=${totalAmount}`;
        break;
      case "tinkoff":
        // Интеграция с Тинькофф
        window.location.href = `/api/payment/tinkoff?amount=${totalAmount}`;
        break;
      case "cloud-payments":
        // Интеграция с CloudPayments
        window.location.href = `/api/payment/cloudpayments?amount=${totalAmount}`;
        break;
      default:
        alert(
          "Выбранный способ оплаты будет доступен после интеграции с backend",
        );
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="CreditCard" size={24} />
          Способ оплаты
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedMethod} onValueChange={handlePaymentSelect}>
          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50"
              >
                <RadioGroupItem value={method.id} id={method.id} />
                <Label
                  htmlFor={method.id}
                  className="flex items-center gap-3 flex-1 cursor-pointer"
                >
                  <Icon
                    name={method.icon as any}
                    size={20}
                    className="text-gray-600"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{method.name}</span>
                      {method.isPopular && (
                        <Badge variant="secondary" className="text-xs">
                          Популярно
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">
                      {method.description}
                    </p>
                    {method.commission && (
                      <p className="text-xs text-orange-600">
                        Комиссия: {method.commission}%
                      </p>
                    )}
                  </div>
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center mb-3">
            <span className="font-medium">К оплате:</span>
            <span className="text-xl font-bold text-primary">
              {totalAmount.toLocaleString()} ₽
            </span>
          </div>
          <Button
            onClick={handleProceedToPayment}
            className="w-full bg-primary hover:bg-primary/90"
            size="lg"
          >
            Перейти к оплате
          </Button>
        </div>

        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <div className="flex items-start gap-2">
            <Icon name="Shield" size={16} className="text-blue-600 mt-0.5" />
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">Безопасность платежей</p>
              <p>
                Все платежи защищены SSL-сертификатом и обрабатываются через
                защищенное соединение.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentMethods;
