const ENDPOINTS = {
  GET: {
    rooms: '/rooms',
  },
  POST: {},
  PUT: {},
  PATCH: {
    updateStatus: (roomId: string | undefined) => `/rooms/${roomId}/status`
  },
  DELETE: {
    deleteRoom: (roomId: string | undefined) => `/rooms/${roomId}`
  },
}

export default ENDPOINTS
