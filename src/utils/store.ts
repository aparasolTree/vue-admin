export interface IData {
    [key: string | symbol]: any;
}

export interface Options {
    expire?: number
}

const ExpireSymbol = '__expire__';

export default {
    set(key: string, data: IData, options: Options = {}) {
        if (options.expire) {
            data[ExpireSymbol] = new Date().getTime() + options.expire * 1000;
        }

        localStorage.setItem(key, JSON.stringify(data));
    },
    get<T>(key: string): T & { [ExpireSymbol]: string } | null {
        const item = localStorage.getItem(key);
        if (item) {
            const result = JSON.parse(item) as T & { [ExpireSymbol]: string };
            if (result[ExpireSymbol] && Number(result[ExpireSymbol]) < new Date().getTime()) {
                localStorage.removeItem(key);
                return null;
            }
            return result;
        }
        return null;
    }
}