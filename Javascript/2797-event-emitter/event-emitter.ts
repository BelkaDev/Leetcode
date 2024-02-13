type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

class EventEmitter {
    private readonly _subscribers: Map<string, Map<Date, Function>> = new Map();

    subscribe(eventName: string, callback: Callback): Subscription {
        const subscribersMap = this._subscribers.get(eventName) ?? new Map();
        const id = new Date();
        subscribersMap.set(id, callback);
        this._subscribers.set(eventName, subscribersMap);
        return {
            unsubscribe: () => {
                subscribersMap.delete(id);
            }
        };
    }
    
    emit(eventName: string, args: any[] = []): any[] {
        const subscribersMap = this._subscribers.get(eventName) || [];
        return [...subscribersMap.values()].map((cb) => cb(...args))
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */