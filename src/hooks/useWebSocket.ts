import { useEffect, useRef, useState } from 'react';

export function useWebSocket(url: string) {
    const [isConnected, setIsConnected] = useState(false);
    const [lastMessage, setLastMessage] = useState<any>(null);
    const wsRef = useRef<WebSocket | null>(null);

    useEffect(() => {
        const ws = new WebSocket(url);

        ws.onopen = () => setIsConnected(true);
        ws.onmessage = (event) => setLastMessage(JSON.parse(event.data));
        ws.onerror = () => setIsConnected(false);
        ws.onclose = () => {
            setIsConnected(false);
            // Reconnect after 5 seconds
            setTimeout(() => {
                // Reconnection logic
            }, 5000);
        };

        wsRef.current = ws;

        return () => ws.close();
    }, [url]);

    const sendMessage = (message: any) => {
        if (wsRef.current?.readyState === WebSocket.OPEN) {
            wsRef.current.send(JSON.stringify(message));
        }
    };

    return { isConnected, lastMessage, sendMessage };
}