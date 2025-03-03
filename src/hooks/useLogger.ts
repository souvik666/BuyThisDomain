import { analytics } from "@/configs/firebase";
import { logEvent } from "firebase/analytics";
import { useCallback } from "react";

type EventParams = Record<string, unknown>;

type Logger = {
    log: (eventName: string, eventParams?: EventParams) => void;
    logPageView: (pagePath: string) => void;
    logSignUp: (method: string) => void;
    logLogin: (method: string) => void;
    logPurchase: (value: number, currency?: string) => void;
    logAddToCart: (itemId: string, itemName: string, price: number) => void;
    logRemoveFromCart: (itemId: string, itemName: string) => void;
    logCheckout: (step: number, option?: string) => void;
    logSearch: (query: string) => void;
    logShare: (contentType: string, itemId: string) => void;
    logCustomEvent: (eventName: string, params: EventParams) => void;
};

export const useLogger = (): Logger => {
    const log = useCallback((eventName: string, eventParams: EventParams = {}) => {
        logEvent(analytics, eventName, eventParams);
    }, []);

    return {
        log,
        logPageView: (pagePath) => log("page_view", { page_path: pagePath }),
        logSignUp: (method) => log("sign_up", { method }),
        logLogin: (method) => log("login", { method }),
        logPurchase: (value, currency = "USD") => log("purchase", { value, currency }),
        logAddToCart: (itemId, itemName, price) => log("add_to_cart", { item_id: itemId, item_name: itemName, price }),
        logRemoveFromCart: (itemId, itemName) => log("remove_from_cart", { item_id: itemId, item_name: itemName }),
        logCheckout: (step, option) => log("begin_checkout", { step, option }),
        logSearch: (query) => log("search", { search_term: query }),
        logShare: (contentType, itemId) => log("share", { content_type: contentType, item_id: itemId }),
        logCustomEvent: (eventName, params) => log(eventName, params),
    };
};
