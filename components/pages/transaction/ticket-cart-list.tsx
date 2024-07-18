import { TicketCartType } from '@/constants/type/ticket-cart-type';
import { UserSessionProps } from '@/constants/type/user-session-props';
import axios from '@/utils/axios';
import { currencyFormatter } from '@/utils/currency-formatter';
import { useSession } from 'next-auth/react';
import React from 'react';
import toast from 'react-hot-toast';

interface TicketCartListProps {
    ticketCart: TicketCartType[]
}

const TicketCartList: React.FC<TicketCartListProps> = ({ ticketCart }) => {
    const filteredTicketCart = ticketCart.filter(ticket => ticket.amount > 0)
    return (
        <div className='flex w-full justify-center'>
            <table className='border-collapse border-spacing-4 text-primary-white'>
                <thead>
                    <tr>
                        <th className='px-4 py-2 text-center'>Qty</th>
                        <th className='px-4 py-2 text-center'>Type</th>
                        <th className='px-4 py-2 text-center'>Total Price (IDR)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredTicketCart && filteredTicketCart.map((item, i) => (
                            <tr key={i}>
                                <td className='px-4 py-2 text-center'>{item.amount}</td>
                                <td className='px-4 py-2 text-center'>{item.name}</td>
                                <td className='px-4 py-2 text-center'>{currencyFormatter(item.amount * item.price)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TicketCartList;
