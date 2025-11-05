import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreditCard, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function Payment() {
  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Payment submitted (dummy)');
    alert('This is a dummy payment page. No actual transaction will be processed.');
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Payment</h1>
        <p className="text-muted-foreground">Manage your payment methods</p>
      </div>

      <Alert className="mb-6 max-w-2xl">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          This is a demo payment page. No real transactions will be processed.
        </AlertDescription>
      </Alert>

      <Card className="p-8 max-w-2xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-primary/10 rounded-lg">
            <CreditCard className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Add Payment Method</h2>
            <p className="text-sm text-muted-foreground">Securely save your payment information</p>
          </div>
        </div>

        <form onSubmit={handlePayment} className="space-y-4">
          <div>
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input
              id="cardNumber"
              data-testid="input-card-number"
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiry">Expiry Date</Label>
              <Input
                id="expiry"
                data-testid="input-expiry"
                placeholder="MM/YY"
                required
              />
            </div>
            <div>
              <Label htmlFor="cvv">CVV</Label>
              <Input
                id="cvv"
                data-testid="input-cvv"
                placeholder="123"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="nameOnCard">Name on Card</Label>
            <Input
              id="nameOnCard"
              data-testid="input-name-on-card"
              placeholder="John Doe"
              required
            />
          </div>

          <Button
            data-testid="button-save-payment"
            type="submit"
            className="w-full"
          >
            Save Payment Method
          </Button>
        </form>
      </Card>

      <Card className="p-6 max-w-2xl mt-6">
        <h3 className="font-semibold mb-4">Payment History</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center pb-3 border-b">
            <div>
              <p className="font-medium">React Developer Payment</p>
              <p className="text-sm text-muted-foreground">March 15, 2024</p>
            </div>
            <span className="font-semibold">$5,000</span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b">
            <div>
              <p className="font-medium">UI Design Project</p>
              <p className="text-sm text-muted-foreground">March 10, 2024</p>
            </div>
            <span className="font-semibold">$3,500</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
