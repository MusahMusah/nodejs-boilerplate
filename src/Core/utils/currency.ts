import numbro from 'numbro';

export const toCurrency = (amount: any, withSign: boolean) => {
    if (amount) {
        return withSign ? '₦'+ numbro(amount).format('₦0,0') : numbro(amount).format('₦0,0');
    }
    return '₦0'
}
