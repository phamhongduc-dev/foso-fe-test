// Dummy data
export const DUMMY_DATA = {
  topProducts: [
    {
      name: 'Áo sơ mi dài tay',
      quantity: 48,
      growth: 8.2
    },
    {
      name: 'Quần tây',
      quantity: 18,
      growth: -5
    },
    {
      name: 'Áo hoodie',
      quantity: 40,
      growth: 12
    },
    {
      name: 'Đầm maxi',
      quantity: 23,
      growth: 3.5
    },
    {
      name: 'Áo thun cổ tròn',
      quantity: 48,
      growth: 4.7
    }
  ],
  productionPlan: [
    { name: 'Mẹt hàng', planned: 60, actual: 40 },
    { name: 'Áo sơ mi', planned: 100, actual: 80 },
    { name: 'Áo thun polo', planned: 20, actual: 20 },
    { name: 'Quần baggy', planned: 80, actual: 60 },
    { name: 'Quần jogger', planned: 60, actual: 40 }
  ],
  topCustomers: [
    { name: 'Côn ty Dệt may Happy Polla', quantity: 3200 },
    { name: 'Côn ty May mặc Saigon trendy', quantity: 3000 },
    { name: 'Outlet Lemon squeeze', quantity: 3150 },
    { name: 'Shop quần áo streetwear New York', quantity: 2900 },
    { name: 'Shop thời trang công sở Basic Office', quantity: 2900 }
  ],
  productionStatus: [
    { status: 'Chưa hoàn thành', value: 5, fill: '#FF8F0D' },
    { status: 'Đang sản xuất', value: 6, fill: '#0375F3' },
    { status: 'Đã hoàn thành', value: 5, fill: '#1FC583' }
  ],
  productionProgressByGroup: [
    { name: 'Áo sơ mi dài tay', quantity: 123, percentage: 50 },
    { name: 'Áo sơ mi cút tay', quantity: 321, percentage: 75 },
    { name: 'Quần baggy', quantity: 231, percentage: 45 },
    { name: 'Quần tây', quantity: 999, percentage: 60 },
    { name: 'Đầm maxi', quantity: 876, percentage: 90 },
    { name: 'Áo hoodie', quantity: 765, percentage: 15 },
    { name: 'Áo khoác bomber', quantity: 543, percentage: 24 }
  ],
  materialNeeds: [
    { id: 1, material: 'Chỉ Cotton', code: 'NVL_00014', unit: 'Cuộn', quantity: 8 },
    { id: 2, material: 'Vải lụa', code: 'NVL_00024', unit: 'Mét', quantity: 8 },
    { id: 3, material: 'Vải lót', code: 'NVL_00024', unit: 'Mét', quantity: 8 },
    { id: 4, material: 'Vải chống thấm', code: 'NVL_00024', unit: 'Mét', quantity: 8 },
    { id: 5, material: 'Vải ni', code: 'NVL_00024', unit: 'Mét', quantity: 8 }
  ]
}

export const DUMMY_DATA_EMPTY = {
  productionStatus: [
    { status: 'Chưa hoàn thành', value: 0, fill: '#FF8F0D' },
    { status: 'Đang sản xuất', value: 0, fill: '#0375F3' },
    { status: 'Đã hoàn thành', value: 0, fill: '#1FC583' }
  ]
}
