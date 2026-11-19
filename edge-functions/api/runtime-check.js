export default async function onRequest(context) {
  let pairTest = 'not-tried';
  try {
    const p = new WebSocketPair();
    pairTest = 'WebSocketPair created OK';
  } catch (e) {
    pairTest = 'WebSocketPair error: ' + (e && e.message ? e.message : String(e));
  }
  const info = {
    test: 'edgeone-runtime-check',
    WebSocketPair_type: typeof WebSocketPair,
    WebSocket_type: typeof WebSocket,
    connect_type: typeof connect,
    fetch_type: typeof fetch,
    pairTest: pairTest
  };
  return new Response(JSON.stringify(info, null, 2), { headers: { 'Content-Type': 'application/json' } });
}
