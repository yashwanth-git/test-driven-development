import { FormEvent, useRef } from 'react';
import { PaymentProps } from './App';

type PaymentFormProps = {
  onSubmit: (data: PaymentProps) => void;
  amountPaid: number;
};

const PaymentForm = ({ onSubmit, amountPaid }: PaymentFormProps) => {
  const amountPaidRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ amountPaid: Number(amountPaidRef.current!.value) });
  };
  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <input
        type="number"
        min={0}
        className="amoutPaid"
        ref={amountPaidRef}
        defaultValue={amountPaid}
      />
      <button className="pay-btn">Pay</button>
    </form>
  );
};

export default PaymentForm;
