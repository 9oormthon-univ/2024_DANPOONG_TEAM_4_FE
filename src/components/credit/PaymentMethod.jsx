import { useState } from 'react';

function PaymentMethod() {
  const [selectedMethod, setSelectedMethod] = useState('credit');
  const [selectedCard, setSelectedCard] = useState('');

  const handleMethodChange = (method) => {
    setSelectedMethod(method);
    if (method !== 'credit') {
      setSelectedCard('');
    }
  };

  const handleCardChange = (event) => {
    setSelectedCard(event.target.value);
  };

  // Static 배열로 결제 수단 정의
  const paymentMethods = [
    { value: 'credit', label: '신용/체크카드' },
    { value: 'kakao', label: '카카오페이' },
    { value: 'other', label: '기타 결제 수단' },
  ];

  // 카드사 배열
  const cardOptions = [
    { value: 'visa', label: '비자' },
    { value: 'mastercard', label: '마스터카드' },
    { value: 'amex', label: '아멕스' },
    { value: 'korean-local', label: '국내 카드' },
  ];

  return (
    <div>
      <h2 className='mb-4 text-lg text-text200'>결제 수단</h2>

      {/* 결제 수단 */}
      <div className='space-y-3'>
        {paymentMethods.map((method) => (
          <label key={method.value} className='flex items-center'>
            <input
              type='radio'
              name='paymentMethod'
              value={method.value}
              checked={selectedMethod === method.value}
              onChange={() => handleMethodChange(method.value)}
              className='hidden peer'
            />
            <span className='flex items-center justify-center w-5 h-5 border-2 rounded-full peer-checked:bg-primary peer-checked:border-primary'>
              {selectedMethod === method.value && (
                <span className='w-2.5 h-2.5 bg-white rounded-full'></span>
              )}
            </span>
            <span className='ml-3 text-text200'>{method.label}</span>
          </label>
        ))}

        {/* 카드사 선택 드롭다운 */}
        {selectedMethod === 'credit' && (
          <div className='ml-8'>
            <select
              className='w-full p-2 border rounded-common'
              value={selectedCard}
              onChange={handleCardChange}
            >
              <option value='' disabled>
                카드사 선택
              </option>
              {cardOptions.map((card) => (
                <option key={card.value} value={card.value}>
                  {card.label}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
}

export default PaymentMethod;
