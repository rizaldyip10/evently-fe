import logoMandiri from '@/assets/image/mandiri.png'
import logoBCA from '@/assets/image/bca.png'
import logoBNI from '@/assets/image/bni.png'
import logoGopay from '@/assets/image/gopay.png'
import logoOvo from '@/assets/image/ovo.png'
import logoShopee from '@/assets/image/shopeepay.png'

const bankVA = [
    { 
        name: 'Mandiri Virtual Account', 
        value: 'Bank VA', 
        id: "mandiriVA",
        image: logoMandiri
    },
    { 
        name: 'BCA Virtual Account', 
        value: 'Bank VA', 
        id: "bcaVA",
        image: logoBCA
    },
    { 
        name: 'BNI Virtual Account', 
        value: 'Bank VA', 
        id: "bniVA",
        image: logoBNI
    },
]

const emoney = [
    { 
        name: 'Gopay', 
        value: 'Electronic Money', 
        id: "gopay",
        image: logoGopay
    },
    { 
        name: 'OVO', 
        value: 'Electronic Money',
        id: "ovo",
        image: logoOvo
    },
    { 
        name: 'Shopee pay', 
        value: 'Electronic Money',
        id: "shopee",
        image: logoShopee
    },
]

export { bankVA, emoney }