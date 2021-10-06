export interface Book extends Record<string, any> {
    id: number
    image?: string | null
    label?: string
    date: string
    authors: string
    description: string
}
