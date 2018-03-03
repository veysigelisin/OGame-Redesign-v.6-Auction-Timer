export const MAX_LOG_ENTRIES = 500
export const MAX_DEP_TIMEOUT = 10000 // ms
export const DEP_CHECK_PERIOD = 500 // ms
export const DEP_LIST = {
  AUCTION: [
    'io',
    '$',
    'nodeParams',
    'simpleCountdown',
    'loca'
  ],
  NON_AUCTION: [
    '$',
    'simpleCountdown'
  ]
}
