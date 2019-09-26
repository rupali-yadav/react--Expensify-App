export const TransferVoucher = (quantity, quantityToTransfer)=>({
    type: "SORT_BY_TRANSFERRED",
    quantity:quantity,
    quantityToTransfer: quantityToTransfer
})