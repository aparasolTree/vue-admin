export interface Menu {
    title?: string;
    active?: boolean;
    icon?: string;
    isOpen?: boolean;
    children?: Menu[];
}