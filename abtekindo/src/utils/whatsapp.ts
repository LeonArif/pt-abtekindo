export const openWhatsApp = (phoneNumber: string, message?: string) => {
  const formattedNumber = phoneNumber.replace(/\D/g, '');
  const encodedMessage = message ? encodeURIComponent(message) : '';
  const url = `https://wa.me/${formattedNumber}${message ? `?text=${encodedMessage}` : ''}`;
  window.open(url, '_blank');
};

export const createProductWhatsAppMessage = (
  productName: string,
  quantity: number,
  packageType: 'product' | 'package'
) => {
  return `Halo, saya tertarik dengan:\n\nProduk: ${productName}\nJumlah: ${quantity} unit\nPaket: ${
    packageType === 'package' ? 'Produk + Pemasangan' : 'Produk Saja'
  }\n\nMohon info lebih lanjut.`;
};