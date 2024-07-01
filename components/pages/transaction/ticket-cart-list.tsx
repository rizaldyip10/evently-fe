import React from 'react';

const TicketCartList = () => {
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
                    <tr>
                        <td className='px-4 py-2 text-center'>1</td>
                        <td className='px-4 py-2 text-center'>Paket VIP</td>
                        <td className='px-4 py-2 text-center'>IDR 371.000</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 text-center'>1</td>
                        <td className='px-4 py-2 text-center'>Paket VIP</td>
                        <td className='px-4 py-2 text-center'>IDR 371.000</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 text-center'>1</td>
                        <td className='px-4 py-2 text-center'>Paket VIP</td>
                        <td className='px-4 py-2 text-center'>IDR 371.000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TicketCartList;
