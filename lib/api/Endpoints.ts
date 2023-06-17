const ENDPOINTS = {
  GET: {
    entries: '/entries',
    globalComponents: '/api-xpm/global-component/live',
    page: (url: string) => `/api-xpm/page/live?url=${url}`,
  },
  POST: {
    createShipTo: (cartId: number) => `/api-cart/ship-to/cart/${cartId}`
  },
  PUT: {},
  PATCH: {},
  DELETE: {},
}

export default ENDPOINTS
