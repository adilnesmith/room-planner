const ENDPOINTS = {
  GET: {
    rooms: '/rooms',
  },
  POST: {},
  PUT: {},
  PATCH: {},
  DELETE: {
    deleteRoom: (roomId: string | undefined) => `/rooms/${roomId}`
  },
}

export default ENDPOINTS
